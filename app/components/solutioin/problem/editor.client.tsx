import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';

export const MainEditor = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>('');
  console.log(content);

  return (
    <Wrapper>
      <Container>
        <Editor
          editorState={editorState}
          wrapperClassName='card'
          editorClassName='card-body'
          toolbarClassName='card-toolbar'
          onEditorStateChange={(newState) => {
            setEditorState(newState);
            setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
          }}
          toolbar={{
            options: [
              'inline',
              'blockType',
              'fontSize',
              'list',
              'textAlign',
              'history',
              'embedded',
            ],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            blockType: {
              inDropdown: true,
              options: ['Code'],
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
            },
          }}
        />
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
