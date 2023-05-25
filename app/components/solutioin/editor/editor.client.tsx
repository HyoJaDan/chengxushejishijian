/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import {
  AtomicBlockUtils,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  Modifier,
  RichUtils,
} from 'draft-js';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
import createFocusPlugin from '@draft-js-plugins/focus';
import createImagePlugin from '@draft-js-plugins/image';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import { SimpleHashtagEditor } from './hashtag';

const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const focusPlugin = createFocusPlugin();

const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const plugins = [
  blockDndPlugin,
  imagePlugin,
  resizeablePlugin,
  alignmentPlugin,
  focusPlugin,
];
const Image = ({ src }) => {
  return <img src={src} alt='img' style={styles.media} />;
};

export const MainEditor = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const [currentBlockType, setCurrentBlockType] = useState();
  const editorRef = useRef();
  const focusEditor = () => {
    editorRef.current.focus();
  };

  /* const [content, setContent] = useState<string>(''); */
  /* console.log(content); */
  const handlePastedText = (text: string) => {
    const contentState = editorState.getCurrentContent();
    const currentSelection = editorState.getSelection();

    // 붙여넣은 텍스트를 현재 블록의 스타일과 일치하도록 처리
    const styledContentState = Modifier.replaceText(
      contentState,
      currentSelection,
      text,
      editorState.getCurrentInlineStyle()
    );

    const newEditorState = EditorState.push(
      editorState,
      styledContentState,
      'insert-characters'
    );

    setEditorState(newEditorState);
    return 'handled';
  };

  const onChange = (onChangeeditorState: EditorState) => {
    setEditorState(onChangeeditorState);
    /* setContent(
      draftToHtml(convertToRaw(onChangeeditorState.getCurrentContent()))
    ); */
  };

  /* 1. 무슨 키를 입력했는지 나오는 함수 */
  const myKeyBindingFn = (e: React.KeyboardEvent<{}>) => {
    const { keyCode } = e;
    if (keyCode === 49 && KeyBindingUtil.hasCommandModifier(e)) {
      return 'h1';
    }
    /*  if (keyCode === 13 && KeyBindingUtil.isSoftNewlineEvent(e)) {
      return 'shift_enter';
    } */
    /* if (keyCode === 13) {
      return 'enter';
    } */
    if (keyCode === 191) {
      console.log('slash');
      return 'slash';
    }
    return getDefaultKeyBinding(e);
  };

  /* 2. 내가 무슨 커멘드를 입력했는지 확인하는 함수 */
  const handleKeyCommand = (command: string) => {
    console.log('커멘드가 입력되었습니다.', command);
    /* if (command === 'enter') {
      console.log('enter이 클릭되었습니다.');
      if (currentBlockType === 'code-block') {
        onChange(RichUtils.insertSoftNewline(editorState));
      } else {
        const newEditerState = createEmptyBlock(editorState);
        onChange(newEditerState);
      }
      return 'handled';
    } */
    if (command === 'split-block' && currentBlockType === 'code-block') {
      console.log('특별');
      onChange(RichUtils.insertSoftNewline(editorState));
      return 'handled';
    }
    /* if (command === 'shift_enter') {
      console.log('shift_enter이 클릭되었습니다.');
      if (currentBlockType === 'code-block') {
        const newEditerState = createEmptyBlock(editorState);
        onChange(newEditerState);
      } else {
        onChange(RichUtils.insertSoftNewline(editorState));
      }
      return 'handled';
    } */
    if (command === 'h1') {
      onChange(RichUtils.toggleBlockType(editorState, 'h1'));
      console.log('커멘트 타입은 헤더 입니다.');
      return 'handled';
    }

    const newState = RichUtils.handleKeyCommand(editorState, command);
    console.log('마아아아아지막 커멘트 타입은', newState, '입니다.');
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  /* 3. 박스의 스타일을 지정 */
  const myBlockStyleFn = (innercontent: any) => {
    const type = innercontent.getType();
    setCurrentBlockType(type);
    console.log('현재 블록 스타일', type);
    if (type === 'h1') {
      return 'headerFont';
    }
    if (type === 'code-block') {
      return 'code-block-css';
    }
    return null;
  };
  const handleInsertImage = (e: any) => {
    const file = e.target.files[0]; // Get the selected image file
    const reader = new FileReader();
    console.log(file, reader);
    reader.onload = (event) => {
      // Create a new entity for the image
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
        'IMAGE',
        'IMMUTABLE',
        {
          src: event.target.result,
          alt: 'Example Image',
        }
      );
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

      // Insert the image into the editor as an atomic block
      const newEditorState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        ' '
      );

      // Update the editor state
      setEditorState(newEditorState);
    };
    reader.readAsDataURL(file);
  };

  const Media = (props) => {
    console.log(props, 'helo');
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const { src } = entity.getData();
    const type = entity.getType();

    let media;
    if (type === 'image') {
      media = <Image src={src} />;
    }

    return media;
  };

  const mediaBlockRenderer = (block) => {
    if (block.getType() === 'atomic') {
      console.log('hello! atomic');
      return {
        component: Media,
        editable: false,
      };
    }

    return null;
  };

  return (
    <Wrapper>
      <Container>
        <EditorWrapper onClick={focusEditor}>
          <Editor
            /* wrapperClassName='card' */
            editorState={editorState}
            placeholder='명령어는 `/` 를 입력해주세요'
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={myKeyBindingFn}
            blockStyleFn={myBlockStyleFn}
            blockRendererFn={mediaBlockRenderer}
            handlePastedText={handlePastedText}
            plugins={plugins}
            ref={editorRef}
          />
          <AlignmentTool />
        </EditorWrapper>
        <Headers>
          <SimpleHashtagEditor />
          <Footer>
            <AddCodeButton
              onClick={() => {
                onChange(RichUtils.toggleBlockType(editorState, 'code-block'));
              }}
            >
              <img src='/icons/code.svg' alt='code' />
              <div>코드 추가</div>
            </AddCodeButton>
            <AddPirtureButton htmlFor='ex_file'>
              <img src='/icons/problem/picture.svg' alt='' />
              사진 추가
              <FileNoneStyle
                type='file'
                id='ex_file'
                onChange={handleInsertImage}
              />
            </AddPirtureButton>
          </Footer>
          <AddCodeButton>제출하기</AddCodeButton>
        </Headers>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 540px;
  margin-bottom: 60px;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 0;
`;

const FileNoneStyle = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const EditorWrapper = styled.div`
  min-height: 424px;
  margin-bottom: 20px;
  cursor: text;
`;
const Headers = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
`;
const Footer = styled.div`
  margin-left: 496px;
  display: flex;
  gap: 8px;
`;
const AddCodeButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  gap: 12px;
  width: 128px;
  height: 44px;
  background: #f8f6f4;
  border-radius: 100px;
  &:hover {
    background-color: ${(prop) => prop.theme.color.basic.white};
    border: 1px solid #a4a2a0;
  }
  &:active {
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border: none;
  }
`;

const AddPirtureButton = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  gap: 12px;
  width: 128px;
  height: 44px;
  background: #f8f6f4;
  border-radius: 100px;
  border: 0;

  &:hover {
    background-color: ${(prop) => prop.theme.color.basic.white};
    border: 1px solid #a4a2a0;
  }
  &:active {
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border: none;
  }
  display: flex;
  align-items: center;
  gap: 8px;
`;
