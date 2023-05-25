import type { EditorState } from 'draft-js';

export const getBlockType = (editorState: EditorState) => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const currentBlock = contentState.getBlockForKey(selection.getStartKey());
  const blockType = currentBlock.getType();
  return blockType;
};
