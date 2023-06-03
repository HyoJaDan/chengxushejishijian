import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import { EditorState, convertFromRaw } from 'draft-js';
import { myBlockStyleFn } from '~/components/solutioin/editor/my-block-style-function';

const resizeablePlugin = createResizeablePlugin();
const decorator = composeDecorators(resizeablePlugin.decorator);
const imagePlugin = createImagePlugin({ decorator });
const plugins = [imagePlugin, resizeablePlugin];
export const Description = ({ description }: { description: string }) => {
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
    <Editor
      editorState={restoredEditorState}
      plugins={plugins}
      blockStyleFn={myBlockStyleFn}
    />
  );
};
