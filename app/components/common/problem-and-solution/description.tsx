import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import { EditorState } from 'draft-js';
import { myBlockStyleFn } from '~/components/solutioin/editor/my-block-style-function';
import { convertJsonToDraft } from '~/hooks/convert-json-to-draft';

const resizeablePlugin = createResizeablePlugin();
const decorator = composeDecorators(resizeablePlugin.decorator);
const imagePlugin = createImagePlugin({ decorator });
const plugins = [imagePlugin, resizeablePlugin];

export const Description = ({ description }: { description: string }) => {
  const restoredContentState = convertJsonToDraft(description);
  const restoredEditorState =
    EditorState.createWithContent(restoredContentState);
  return (
    <Editor
      editorState={restoredEditorState}
      plugins={plugins}
      blockStyleFn={myBlockStyleFn}
    />
  );
};
