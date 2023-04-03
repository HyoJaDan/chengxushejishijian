import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createFocusPlugin from '@draft-js-plugins/focus';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import '@draft-js-plugins/hashtag/lib/plugin.css';
import createImagePlugin from '@draft-js-plugins/image';
import { EditorState } from 'draft-js';
import { Component } from 'react';
import styled from 'styled-components';
import createColorBlockPlugin from './colorBlockPlugin';

/*  1 선언 */
const hashtagPlugin = createHashtagPlugin();
const imagePlugin = createImagePlugin();

/* focus를 위한 것들 */
const focusPlugin = createFocusPlugin();
const decoratorForFocus = composeDecorators(focusPlugin.decorator);
const colorBlockPlugin = createColorBlockPlugin({ decoratorForFocus });

/* 4 연결 */
const plugins = [hashtagPlugin, imagePlugin, focusPlugin, colorBlockPlugin];
export default class SimpleHashtagEditor extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    editorState: EditorState.createEmpty(),
    /* 1. 기본
    editorState: EditorState.createEmpty(), */
    /* 2. 만약 값을 글로 줬다면 text ='hello"
    editorState:createEditorStateWithText(text) */
    /* 3. focus를 위한거
    editorState: EditorState.createWithContent(convertFromRaw(initialState)) */
    /* editorState: EditorState.createWithContent(convertFromRaw(initialState)), */
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    const { focus, state } = this;
    return (
      <Temp className='qq' onClick={focus}>
        <Editor
          editorState={state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => {
            this.editor = element;
          }}
        />
      </Temp>
    );
  }
}
const Temp = styled.div`
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: text;
  padding: 16px;
  border-radius: 2px;
  margin-bottom: 2em;
  box-shadow: inset 0px 1px 8px -3px #ababab;
  background: #fefefe;
  &:hover {
    border-color: black;
  }
`;
/* .editor :global(.public-DraftEditor-content) {
  min-height: 140px;
} */
