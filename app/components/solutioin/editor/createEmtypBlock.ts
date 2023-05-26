import { EditorState, Modifier, genKey } from 'draft-js';

export function createEmptyBlock1(editorState: EditorState) {
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
export function createEmptyBlock2(editorState: EditorState) {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const newBlock = contentState.getBlockMap().first().merge({
    text: '',
    type: 'unstyled',
    data: {},
    key: genKey(),
    characterList: [],
  });
  const newContentState = contentState.merge({
    blockMap: contentState.getBlockMap().set(newBlock.key, newBlock),
    selectionAfter: selection.merge({
      anchorKey: newBlock.key,
      anchorOffset: 0,
      focusKey: newBlock.key,
      focusOffset: 0,
      isBackward: false,
      hasFocus: true,
    }),
  });
  const newEditorState = EditorState.push(
    editorState,
    newContentState,
    'insert-characters'
  );
  return newEditorState;
}

export function createEmptyBlock(editorState: EditorState) {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();

  // 현재 포커스된 블록의 키를 가져옵니다.
  const focusKey = selection.getFocusKey();

  // 현재 포커스된 블록의 인덱스를 가져옵니다.
  const focusBlockIndex = contentState
    .getBlockMap()
    .keySeq()
    .findIndex((key) => key === focusKey);

  // 현재 포커스된 블록의 다음 인덱스를 계산합니다.
  const nextBlockIndex = focusBlockIndex + 1;

  // 현재 포커스된 블록의 다음 블록을 가져옵니다.
  const nextBlockKey = contentState
    .getBlockMap()
    .keySeq()
    .skip(nextBlockIndex)
    .first();
  const nextBlock = contentState.getBlockForKey(nextBlockKey);

  // 새로운 블록을 생성합니다.
  const newBlock = contentState.createBlock('unstyled', '', {});

  // 새로운 블록을 현재 블록 다음에 추가합니다.
  const newContentState = Modifier.insertBlock(
    contentState,
    newBlock,
    nextBlockKey
  );

  // 에디터 상태를 업데이트합니다.
  const newEditorState = EditorState.push(
    editorState,
    newContentState,
    'insert-fragment'
  );

  return newEditorState;
}
