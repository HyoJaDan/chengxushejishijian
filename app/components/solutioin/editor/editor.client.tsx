/* eslint-disable @typescript-eslint/no-explicit-any */
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createFocusPlugin from '@draft-js-plugins/focus';
import createImagePlugin from '@draft-js-plugins/image';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import {
  EditorState,
  KeyBindingUtil,
  Modifier,
  RichUtils,
  convertToRaw,
  getDefaultKeyBinding,
} from 'draft-js';
import { addDoc, collection } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { db } from '~/config/firebase.client';
import { heightestSolutionNumber } from '~/data/heightNumber';
import { createEmptyBlock2 } from './createEmtypBlock';
import { getBlockType } from './get-block-type';
import { myBlockStyleFn } from './my-block-style-function';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const decorator = composeDecorators(
  resizeablePlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });
const plugins = [blockDndPlugin, imagePlugin, resizeablePlugin, focusPlugin];

export const CustomEditor = ({ params }: { params: string }) => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const heightNumber = useRecoilValue<number>(heightestSolutionNumber);
  const editorRef = useRef();
  const onChange = (onChangeeditorState: EditorState) => {
    setEditorState(onChangeeditorState);
  };

  const focusEditor = () => {
    editorRef.current.focus();
  };
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
  /* 1. 무슨 키를 입력했는지 나오는 함수 */
  const myKeyBindingFn = (e: React.KeyboardEvent<{}>) => {
    const { keyCode } = e;
    if (keyCode === 49 && KeyBindingUtil.hasCommandModifier(e)) {
      return 'h1';
    }
    if (keyCode === 13 && KeyBindingUtil.isSoftNewlineEvent(e)) {
      return 'shift_enter';
    }
    return getDefaultKeyBinding(e);
  };

  /* 2. 내가 무슨 커멘드를 입력했는지 확인하는 함수 */
  const handleKeyCommand = (command: string) => {
    const blockType = getBlockType(editorState);

    if (command === 'split-block' && blockType === 'code-block') {
      onChange(RichUtils.insertSoftNewline(editorState));
      return 'handled';
    }
    if (command === 'shift_enter' && blockType === 'code-block') {
      const newEditerState = createEmptyBlock2(editorState);
      onChange(newEditerState);
      return 'handled';
    }
    if (command === 'h1') {
      onChange(RichUtils.toggleBlockType(editorState, 'h1'));
      return 'handled';
    }

    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };
  const goToMainPage = () => {
    if (window !== null) {
      window.location.replace('/');
    }
  };
  const submitFunction = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    // JSON 객체를 문자열로 변환
    const jsonString = JSON.stringify(rawContentState);

    const solutionCollectionRef = collection(db, 'solutions');
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const onSubmitFunction = async () => {
      try {
        await addDoc(solutionCollectionRef, {
          createdAt: currentDate,
          description: jsonString,
          problemId: params,
          id: heightNumber,
          solutionId: heightNumber,
        });
      } catch (err) {
        console.error(err);
      }
    };
    onSubmitFunction();
    setTimeout(goToMainPage, 2000);
  };
  return (
    <Wrapper>
      <Container>
        <EditorWrapper onClick={focusEditor}>
          <Editor
            editorState={editorState}
            placeholder='写你的回答'
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={myKeyBindingFn}
            blockStyleFn={myBlockStyleFn}
            handlePastedText={handlePastedText}
            plugins={plugins}
            /* blockRenderMap={extendedBlockRenderMap} */
            ref={editorRef}
          />
        </EditorWrapper>
        <Headers>
          <Footer>
            <AddCodeButton
              onClick={() => {
                onChange(RichUtils.toggleBlockType(editorState, 'code-block'));
              }}
            >
              <img src='/icons/code.svg' alt='code' />
              <div>添加代码</div>
            </AddCodeButton>
          </Footer>
          <AddCodeButton
            onClick={() => {
              submitFunction();
            }}
          >
            提交
          </AddCodeButton>
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
  width: fit-content;
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
  width: fit-content;
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
