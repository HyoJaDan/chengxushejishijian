import Editor from '@draft-js-plugins/editor';
import { EditorState, convertFromRaw } from 'draft-js';

export const SolutionDescription = ({
  description,
}: {
  description: string;
}) => {
  const parsedJson = JSON.parse(description);
  const contentState = {
    entityMap: parsedJson.entityMap,
    blocks: parsedJson.blocks,
  };
  // RawDraftContentState를 ContentState 객체로 변환
  const restoredContentState = convertFromRaw(contentState);

  const restoredEditorState =
    EditorState.createWithContent(restoredContentState);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  return (
    <Editor editorState={restoredEditorState} blockStyleFn={myBlockStyleFn} />
  );
};
