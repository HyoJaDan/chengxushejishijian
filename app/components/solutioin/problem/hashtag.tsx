import Editor from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import '@draft-js-plugins/hashtag/lib/plugin.css';
import type { ContentBlock } from 'draft-js';
import {
  convertToRaw,
  EditorState,
  getDefaultKeyBinding,
  RichUtils,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useState } from 'react';
import styled from 'styled-components';
import { createEmptyBlock } from './createEmtypBlock';

const hashtagPlugin = createHashtagPlugin();

export function SimpleHashtagEditor() {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>('');
  /* console.log(content); */
  const onChange = (onChangeeditorState: EditorState) => {
    setEditorState(onChangeeditorState);
    setContent(
      draftToHtml(convertToRaw(onChangeeditorState.getCurrentContent()))
    );
  };
  const [isClicked, setIsClicked] = useState(false);

  /* 1. 무슨 키를 입력했는지 나오는 함수 */
  const myKeyBindingFn = (e: KeyboardEvent) => {
    console.log('입력', e);
    if (e.keyCode === 13) {
      return 'enter';
    }
    return getDefaultKeyBinding(e);
  };

  /* 2. 내가 무슨 커멘드를 입력했는지 확인하는 함수 */
  const handleKeyCommand = (command: string) => {
    console.log('커멘드가 입력되었습니다.', command);
    const contentState = editorState.getLastChangeType();
    if (contentState === 'change-block-type' && command === 'enter') {
      const newEditerState = createEmptyBlock(editorState);
      onChange(newEditerState);
      return 'handled';
    }
    if (command === 'enter') {
      onChange(RichUtils.toggleBlockType(editorState, 'enter'));
      console.log('커멘트 타입은 enter 입니다.');
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
  const myBlockStyleFn = (contentBlock: ContentBlock) => {
    const type = contentBlock.getType();
    console.log('블록 스타일', type);
    if (type === 'enter') {
      return 'enter';
    }
    return null;
  };
  const handleClick = () => {
    setIsClicked(true);
  };
  if (isClicked)
    return (
      <>
        <Text className='body2_SB'>태그</Text>
        <TrueWrapper>
          <Editor
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={myKeyBindingFn}
            blockStyleFn={myBlockStyleFn}
            placeholder='관련된 해시태그 문구를 넣어주세요.'
            onFocus={handleClick}
            plugins={[hashtagPlugin]}
          />
        </TrueWrapper>
      </>
    );
  return (
    <Wrapper onClick={handleClick}>
      <Circle>
        <Sharp>#</Sharp>
      </Circle>
      태그
    </Wrapper>
  );
}
const Text = styled.div`
  position: absolute;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #d9d9d9;
  border-radius: 100px;
`;
const Sharp = styled.div`
  width: 8.63px;
  height: 7.89px;
  color: ${(prop) => prop.theme.color.basic.white};
`;
const TrueWrapper = styled.div`
  position: absolute;
  left: 36px;
  top: 8px;
  height: 73px;
  width: 431px;
  padding: 8px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_500};
  border-radius: 8px;
  overflow: scroll;
`;
const Wrapper = styled.div`
  position: absolute;
  width: 87px;
  height: 44px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_500};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
