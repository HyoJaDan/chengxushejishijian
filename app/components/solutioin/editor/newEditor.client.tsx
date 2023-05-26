/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from '@draft-js-plugins/editor';
import axios from 'axios';
import {
  convertToRaw,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils,
} from 'draft-js';
import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { solutionAddress } from '~/data/constants/adress';
import { myAccessToken } from '~/data/user/common/login-information';
import { createEmptyBlock2 } from './createEmtypBlock';
import { getBlockType } from './get-block-type';

export const SubEditor = ({ params }: { params: string }) => {
  const accessToken = useRecoilValue(myAccessToken);
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const editorRef = useRef();

  const onChange = (onChangeeditorState: EditorState) => {
    setEditorState(onChangeeditorState);
  };
  console.log('-------------------------------');

  /* 1. 무슨 키를 입력했는지 나오는 함수 */
  const myKeyBindingFn = (e: React.KeyboardEvent<{}>) => {
    const { keyCode } = e;
    if (keyCode === 49 && KeyBindingUtil.hasCommandModifier(e)) {
      return 'h1';
    }
    if (keyCode === 13 && KeyBindingUtil.isSoftNewlineEvent(e)) {
      return 'shift_enter';
    }

    /* if (keyCode === 191) {
      console.log('slash');
      return 'slash';
    } */
    return getDefaultKeyBinding(e);
  };

  /* 2. 내가 무슨 커멘드를 입력했는지 확인하는 함수 */
  const handleKeyCommand = (command: string) => {
    const blockType = getBlockType(editorState);
    console.log('커멘드가 입력되었습니다: ', command, 'blockType: ', blockType);
    if (command === 'split-block' && blockType === 'code-block') {
      onChange(RichUtils.insertSoftNewline(editorState));
      return 'handled';
    }
    if (command === 'shift_enter') {
      if (blockType === 'code-block') {
        const newEditerState = createEmptyBlock2(editorState);
        onChange(newEditerState);
      } else {
        // 1
        /* console.log('BB');
        const newEditorState = customInsertSoftNewline(editorState);
        onChange(newEditorState);

        const contentState = Modifier.splitBlock(
          editorState.getCurrentContent(),
          editorState.getSelection()
        );
        const newEditorState2 = EditorState.push(
          editorState,
          contentState,
          'split-block'
        );
        onChange(newEditorState2); */
        onChange(RichUtils.insertSoftNewline(editorState));
        /* const temp = fuckTemp(editorState); */
        /* onChange(temp); */
      }
      return 'handled';
    }

    if (command === 'h1') {
      onChange(RichUtils.toggleBlockType(editorState, 'h1'));
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
    if (type === 'unstyled') {
      return 'my-custom-block-style';
    }
    return null;
  };

  const focusEditor = () => {
    editorRef.current.focus();
  };
  const submitFunc = async () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);

    // JSON 객체를 문자열로 변환
    const jsonString = JSON.stringify(rawContentState);
    console.log(rawContentState, '1');
    console.log(jsonString, '2');
    const response = await axios.post(
      `${solutionAddress}`,
      {
        title: '안녕',
        lessonId: Number(params),
        description: jsonString,
        relatedLink: 'https://github.com/the-pool/the-pool-api',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (window !== null) {
      window.location.replace('/solution');
    }
  };
  return (
    <Wrapper>
      <Container>
        <EditorWrapper onClick={focusEditor}>
          <Editor
            editorState={editorState}
            placeholder=' 명령어는 `/` 를 입력해주세요'
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
          <AddCodeButton onClick={submitFunc}>제출하기</AddCodeButton>
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
