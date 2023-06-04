/* eslint-disable @typescript-eslint/no-explicit-any */
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
import Editor, { composeDecorators } from '@draft-js-plugins/editor';

import createFocusPlugin from '@draft-js-plugins/focus';
import createImagePlugin from '@draft-js-plugins/image';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import {
  AtomicBlockUtils,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  Modifier,
  RichUtils,
} from 'draft-js';
import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { myAccessToken } from '~/data/user/common/login-information';
import { pictureTranstorm } from '~/hooks/pirture-transtorm';
import { createEmptyBlock2 } from './createEmtypBlock';
import { getBlockType } from './get-block-type';
import { myBlockStyleFn } from './my-block-style-function';
import { submitFunc } from './submit';

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
  const accessToken = useRecoilValue(myAccessToken);
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const editorRef = useRef();
  const onChange = (onChangeeditorState: EditorState) => {
    setEditorState(onChangeeditorState);
  };

  const focusEditor = () => {
    editorRef.current.focus();
  };
  /** 복사, 붙여녛기 허용하는 함수 */
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
  const handleInsertImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      const contentState = editorState.getCurrentContent();
      const image = await pictureTranstorm(file, accessToken);

      const contentStateWithEntity = contentState.createEntity(
        'IMAGE',
        'IMMUTABLE',
        {
          src: image,
          alt: 'Image',
        }
      );
      /* const entityKey = contentState.getLastCreatedEntityKey(); */
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      console.log(contentStateWithEntity);
      console.log(entityKey);
      const newEditorState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        ' '
      );
      onChange(newEditorState);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Wrapper>
      <Container>
        <EditorWrapper onClick={focusEditor}>
          <Editor
            editorState={editorState}
            placeholder='명령어는 `/` 를 입력해주세요. 사진, 혹은 첫번째 줄에 있는 내용이 됩니다.'
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={myKeyBindingFn}
            blockStyleFn={myBlockStyleFn}
            handlePastedText={handlePastedText}
            plugins={plugins}
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
          <AddCodeButton
            onClick={() => {
              submitFunc(editorState, params, accessToken);
            }}
          >
            제출하기
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
