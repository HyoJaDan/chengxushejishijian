import { EditorState, Modifier } from 'draft-js';

function isKorean(input) {
  // 한글 유니코드 범위: AC00-D7AF
  const koreanRegex = /[\uAC00-\uD7AF]/;
  return koreanRegex.test(input);
}

export const customInsertSoftNewline = (editorState: EditorState) => {
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();

  const softNewlineCharacter = '\n'; // 소프트 개행 문자

  const newContentState = Modifier.insertText(
    contentState,
    selectionState,
    softNewlineCharacter
  );

  const newEditorState = EditorState.push(
    editorState,
    newContentState,
    'insert-characters'
  );

  return newEditorState;
};
export const fuckTemp = (editorState: EditorState) => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const blockKey = selection.getStartKey();
  const block = contentState.getBlockForKey(blockKey);
  console.log(block, 'key');
  const offset = selection.getStartOffset();

  const textWithZeroWidthSpace = `${block
    .getText()
    .slice(0, offset)}\u200B${block.getText().slice(offset)}`;
  console.log(offset, 'offset');
  console.log(textWithZeroWidthSpace);
  const newContentState = Modifier.replaceText(
    contentState,
    selection.merge({ focusOffset: offset }),
    textWithZeroWidthSpace
  );
  console.log(newContentState, 'Last');
  const newEditorState = EditorState.push(
    editorState,
    newContentState,
    'insert-characters'
  );
  const updatedEditorState = EditorState.moveFocusToEnd(newEditorState);
  return updatedEditorState;
};
