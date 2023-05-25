/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from '@draft-js-plugins/editor';
import {
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils,
} from 'draft-js';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { getBlockType } from './get-block-type';

export const SubEditor = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [currentBlockType, setCurrentBlockType] = useState();
  const editorRef = useRef();

  const onChange = (onChangeeditorState: EditorState) => {
    setEditorState(onChangeeditorState);
  };
  console.log('-------------------------------');
  // 0.이 함수는 오히려 한국말 뒤에 /n을 붙여 작성되게 돼서 좋다.
  /* const handleReturn = (e: React.KeyboardEvent<{}>) => {
    if (e.shiftKey) {
      setEditorState(RichUtils.insertSoftNewline(editorState));
    } else {
      console.log('0 엔터키누름 -> 띄어쓰기');
      const currentContent = editorState.getCurrentContent();
      const selection = editorState.getSelection();

      // 현재 컨텐트와 선택 영역에 '\n' (줄 바꿈)을 삽입합니다.
      const newContent = Modifier.insertText(currentContent, selection, '\n');

      // 새로운 컨텐트를 에디터 상태에 반영합니다.
      const newEditorState = EditorState.push(
        editorState,
        newContent,
        'insert-characters'
      );
      onChange(newEditorState);
      e.preventDefault();
    }
  }; */

  /* 1. 무슨 키를 입력했는지 나오는 함수 */
  const myKeyBindingFn = (e: React.KeyboardEvent<{}>) => {
    const { keyCode } = e;
    if (keyCode === 49 && KeyBindingUtil.hasCommandModifier(e)) {
      return 'h1';
    }
    /* if (keyCode === 13 && KeyBindingUtil.isSoftNewlineEvent(e)) {
      return 'shift_enter';
    }
    if (keyCode === 13) {
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
    const blockType = getBlockType(editorState);
    console.log('blockTYPE이다!!', blockType);
    if (command === 'split-block' && blockType === 'code-block') {
      console.log('SEX');
      onChange(RichUtils.insertSoftNewline(editorState));
      return 'handled';
    }
    /* if (command === 'enter') {
      console.log('enter이 클릭되었습니다.');
      if (blockType === 'code-block') {
        onChange(RichUtils.insertSoftNewline(editorState));
      } else {
        const newEditerState = createEmptyBlock(editorState);
        onChange(newEditerState);
      }
      return 'handled';
    }
    if (command === 'shift_enter') {
      console.log('shift_enter이 클릭되었습니다.');
      if (blockType === 'code-block') {
        const newEditerState = createEmptyBlock(editorState);
        onChange(newEditerState);
      } else {
        onChange(RichUtils.insertSoftNewline(editorState));
      }
      return 'handled';
    } */

    /* if (command === 'split-block' && currentBlockType === 'code-block') {
      console.log('특별');
      onChange(RichUtils.insertSoftNewline(editorState));
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
    if (type === 'h1') {
      return 'headerFont';
    }
    if (type === 'code-block') {
      return 'code-block-css';
    }
    return null;
  };

  const focusEditor = () => {
    editorRef.current.focus();
  };

  return (
    <Wrapper>
      <Container>
        <EditorWrapper onClick={focusEditor}>
          <Editor
            editorState={editorState}
            placeholder='명령어는 `/` 를 입력해주세요'
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={myKeyBindingFn}
            blockStyleFn={myBlockStyleFn}
            /* handleReturn={handleReturn} */
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
