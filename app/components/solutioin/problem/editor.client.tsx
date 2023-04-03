import Editor from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import {
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils,
} from 'draft-js';
import { useState } from 'react';
import styled from 'styled-components';

const hashtagPlugin = createHashtagPlugin();
/* class CustomButton extends Component {
  toggleBold: Function = (): void => {
    const { editorState, onChange } = this.props;
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const newContentState = Modifier.setBlockType(
      contentState,
      selectionState,
      'code-block'
    );
    onChange(
      EditorState.push(editorState, newContentState, 'change-block-type')
    );
  };

  render() {
    return (
      <Button>
        <img src='/icons/code.svg' alt='code' />
        <div onClick={this.toggleBold}>코드 추가</div>
      </Button>
    );
  }
} */

export const MainEditor = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  /* const [content, setContent] = useState<string>('');
  console.log(content); */

  const onChange = (onChangeeditorState: EditorState) => {
    setEditorState(onChangeeditorState);
  };

  /* 내가 무슨 커멘드를 입력했는지 확인하는 함수 */
  const handleKeyCommand = (command: string) => {
    console.log('커멘드가 입력되었습니다.', command);

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

  /* 내가 언더라인 버튼을 클릭했는지 아는 함수 */
  const onUnderlineClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  /* 코드 나오는 함수 */
  const onToggleCode = () => {
    onChange(RichUtils.toggleCode(editorState));
  };

  /* 무슨 키를 입력했는지 나오는 함수 */
  const myKeyBindingFn = (e) => {
    console.log('입력', e);
    if (e.keyCode === 49 && KeyBindingUtil.hasCommandModifier(e)) {
      return 'h1';
    }
    return getDefaultKeyBinding(e);
  };

  /* 박스의 스타일을 지정 */
  const myBlockStyleFn = (contentBlock) => {
    const type = contentBlock.getType();
    console.log('현제 블록 스타일', type);
    if (type === 'h1') {
      return 'headerFont';
    }
    return null;
  };

  return (
    <Wrapper>
      <Container>
        <Editor
          wrapperClassName='card'
          editorClassName='card-body'
          toolbarClassName='card-toolbar'
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={myKeyBindingFn}
          blockStyleFn={myBlockStyleFn}
          plugins={[hashtagPlugin]}
        />
        <Headers>
          <Button onClick={onToggleCode}>Code</Button>
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
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Headers = styled.div`
  display: flex;
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

// eslint-disable-next-line no-lone-blocks
{
  /* <Editor
  wrapperClassName='card'
  editorClassName='card-body'
  toolbarClassName='card-toolbar'
  editorState={editorState}
  onEditorStateChange={(newState) => {
    setEditorState(newState);
    setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
  }}
  toolbarCustomButtons={[<CustomButton key='1' />]}
/> */
}

{
  /* <SimpleHashtagEditor /> */
}

/* <Editor
editorState={editorState}
wrapperClassName='card'
editorClassName='card-body'
toolbarClassName='card-toolbar'
  onEditorStateChange={(newState) => {
    setEditorState(newState);
    setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
  }}
  toolbar={{
    colorPicker: { component: ColorPic },
  }}
  mention={{
    separator: ' ',
    trigger: '@',
    suggestions: [
      { text: 'APPLE', value: 'apple', url: 'apple' },
      { text: 'BANANA', value: 'banana', url: 'banana' },
      { text: 'CHERRY', value: 'cherry', url: 'cherry' },
      { text: 'DURIAN', value: 'durian', url: 'durian' },
      { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
      { text: 'FIG', value: 'fig', url: 'fig' },
      { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
      { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
    ],
  }}
/> */
/* toolbar={{
            options: ['blockType'],
            blockType: {
              inDropdown: false,
              options: ['Code'],
            },
            image: {
              icon: image,
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: undefined,
              previewImage: false,
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              alt: { present: false, mandatory: false },
              defaultSize: {
                height: 'auto',
                width: 'auto',
              },
            },
          }} */
