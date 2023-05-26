import Editor from '@draft-js-plugins/editor';
import { EditorState, convertFromRaw } from 'draft-js';
import { myBlockStyleFn } from '../editor/my-block-style-function';

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

  return (
    <Editor editorState={restoredEditorState} blockStyleFn={myBlockStyleFn} />
  );
};
