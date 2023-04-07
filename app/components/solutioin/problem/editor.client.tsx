import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import {
  AtomicBlockUtils,
  convertToRaw,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
import createFocusPlugin from '@draft-js-plugins/focus';
import createImagePlugin from '@draft-js-plugins/image';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import { createEmptyBlock } from './createEmtypBlock';
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
const Image = (props) => {
  const { src } = props;
  return <img src={src} alt='img' style={styles.media} />;
};
export const MainEditor = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const editorRef = useRef();
  const focusEditor = () => {
    editorRef.current.focus();
  };

  const [content, setContent] = useState<string>('');
  console.log(content);
  const onChange = (onChangeeditorState: EditorState) => {
    setEditorState(onChangeeditorState);
    setContent(
      draftToHtml(convertToRaw(onChangeeditorState.getCurrentContent()))
    );
  };

  /* 내가 언더라인 버튼을 클릭했는지 아는 함수 */
  const onUnderlineClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  /* 코드 나오는 함수 */
  const onToggleCode = () => {
    onChange(RichUtils.toggleCode(editorState));
  };

  /* 1. 무슨 키를 입력했는지 나오는 함수 */
  const myKeyBindingFn = (e: React.KeyboardEvent<{}>) => {
    const { keyCode } = e;
    if (keyCode === 49 && KeyBindingUtil.hasCommandModifier(e)) {
      return 'h1';
    }
    if (keyCode === 13 && KeyBindingUtil.isSoftNewlineEvent(e)) {
      return 'shift_enter';
    }
    if (keyCode === 13) {
      return 'enter';
    }
    return getDefaultKeyBinding(e);
  };

  /* 2. 내가 무슨 커멘드를 입력했는지 확인하는 함수 */
  const handleKeyCommand = (command: string) => {
    console.log('커멘드가 입력되었습니다.', command);
    if (command === 'enter') {
      const newEditerState = createEmptyBlock(editorState);
      onChange(newEditerState);
      return 'handled';
    }
    if (command === 'shift_enter') {
      console.log('shift_enter이 클릭되었습니다.');
      onChange(RichUtils.insertSoftNewline(editorState));
      return 'handled';
    }
    if (command === 'h1') {
      onChange(RichUtils.toggleBlockType(editorState, 'h1'));
      console.log('커멘트 타입은 헤더 입니다.');
      return 'handled';
    }
    const newState = RichUtils.handleKeyCommand(editorState, command);
    console.log('커멘트 타입은', newState, '입니다.');
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  /* 3. 박스의 스타일을 지정 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const myBlockStyleFn = (innercontent: any) => {
    const type = innercontent.getType();
    console.log('현제 블록 스타일', type);
    if (type === 'h1') {
      return 'headerFont';
    }
    return null;
  };
  const handleInsertImage = () => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'IMAGE',
      'IMMUTABLE',
      {
        src: 'data:image/png;base64,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', // Replace with actual image URL
        alt: 'Image', // Replace with actual alt text
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
            wrapperClassName='card'
            editorState={editorState}
            placeholder='내용을 입력해주세요.'
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={myKeyBindingFn}
            blockStyleFn={myBlockStyleFn}
            blockRendererFn={mediaBlockRenderer}
            plugins={plugins}
            ref={editorRef}
          />
          <AlignmentTool />
        </EditorWrapper>
        <Headers>
          <SimpleHashtagEditor />
          <Buttons>
            <Button>
              <img src='/icons/code.svg' alt='code' />
              <ButtonNoneStyle type='button' onClick={onToggleCode}>
                코드 추가
              </ButtonNoneStyle>
            </Button>
            <Button onClick={handleInsertImage}>사진 추가</Button>
          </Buttons>
          <Button onClick={onUnderlineClick}>제출하기</Button>
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
`;

const ButtonNoneStyle = styled.button`
  border: 0;
  background-color: transparent;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const EditorWrapper = styled.div`
  min-height: 424px;
  margin-bottom: 20px;
`;
const Headers = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
`;
const Buttons = styled.div`
  margin-left: 496px;
  display: flex;
  gap: 8px;
`;
const Button = styled.div`
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
