import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import {
  convertFromRaw,
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
/* const colorBlockPlugin = createColorBlockPlugin({ decorator }); */
const imagePlugin = createImagePlugin({ decorator });

/* const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload: Upload,
  addImage: imagePlugin.addImage,
});
 */
const plugins = [
  /* dragNDropFileUploadPlugin, */
  /* colorBlockPlugin, */
  blockDndPlugin,
  imagePlugin,
  resizeablePlugin,
  alignmentPlugin,
  focusPlugin,
];
const initialState = {
  entityMap: {
    0: {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: '/icons/banner-area.png',
      },
    },
  },
  blocks: [
    {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0,
        },
      ],
      data: {},
    },
    {
      key: 'e23a8',
      text: 'See advanced examples further down …',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};
export const MainEditor = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    /* EditorState.createEmpty() */
    EditorState.createWithContent(convertFromRaw(initialState))
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
    /* if (type === 'atomic') {
      const contentState = editorState.getCurrentContent();
      const entity = contentState.getEntity(innercontent.getEntityAt(0));
      const temp = entity.getType();
      console.log('Vallue');
      if (temp === 'colorBlock') {
        console.log('Hello');
        return {
          component,
          editable: false,
        };
      }
    } */
    return null;
  };

  return (
    <Wrapper>
      <Container>
        <EditorWrapper onClick={focusEditor}>
          <Editor
            /*  wrapperClassName='card'
            editorClassName='card-body'
            toolbarClassName='card-toolbar' */
            wrapperClassName='card'
            editorState={editorState}
            placeholder='내용을 입력해주세요.'
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={myKeyBindingFn}
            blockStyleFn={myBlockStyleFn}
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
            <Button onClick={onUnderlineClick}>Underline</Button>
          </Buttons>
          <Button onClick={onUnderlineClick}>Underline</Button>
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
