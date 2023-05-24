import { ContentBlock, EditorState, genKey } from 'draft-js';

export function createEmptyBlock(editorState: EditorState) {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const newBlock = new ContentBlock({
    key: genKey(), // Generate a new unique key for the new block
    type: 'unstyled', // Set the type to 'unstyled'
    text: '', // Set the text to empty
  });

  const newBlockMap = contentState
    .getBlockMap()
    .set(newBlock.getKey(), newBlock);
  const newContentState = contentState.merge({
    blockMap: newBlockMap,
    selectionBefore: selection,
    selectionAfter: selection.merge({
      anchorKey: newBlock.getKey(),
      anchorOffset: 0,
      focusKey: newBlock.getKey(),
      focusOffset: 0,
      isBackward: false,
    }),
  });
  const newEditorState = EditorState.push(
    editorState,
    newContentState,
    'insert-fragment'
  );
  return newEditorState;
}
