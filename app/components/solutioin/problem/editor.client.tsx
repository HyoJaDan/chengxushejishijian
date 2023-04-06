import Editor from '@draft-js-plugins/editor';
import {
  convertToRaw,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useState } from 'react';
import styled from 'styled-components';
import { createEmptyBlock } from './createEmtypBlock';
import { SimpleHashtagEditor } from './hashtag';

export const MainEditor = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
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
  const myBlockStyleFn = (innercontent) => {
    const type = innercontent.getType();
    console.log('현제 블록 스타일', type);
    if (type === 'h1') {
      return 'headerFont';
    }
    return null;
  };

  return (
    <Wrapper>
      <Container>
        <EditorWrapper>
          <Editor
            /*  wrapperClassName='card'
            editorClassName='card-body'
            toolbarClassName='card-toolbar' */
            editorState={editorState}
            placeholder='내용을 입력해주세요.'
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={myKeyBindingFn}
            blockStyleFn={myBlockStyleFn}
          />
        </EditorWrapper>
        <Headers>
          <SimpleHashtagEditor />
          <Buttons>
            <Button>
              <img src='/icons/code.svg' alt='code' />
              <button type='button' onClick={onToggleCode}>
                코드 추가
              </button>
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
  height: 540px;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const EditorWrapper = styled.div`
  height: 424px;
  overflow: scroll;
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
