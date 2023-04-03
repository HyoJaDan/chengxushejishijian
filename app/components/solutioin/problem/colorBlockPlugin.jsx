/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const ColorBlock = React.forwardRef(
  (
    {
      block,
      blockProps,
      customStyleMap,
      customStyleFn,
      decorator,
      forceSelection,
      offsetKey,
      selection,
      tree,
      contentState,
      blockStyleFn,
      preventScroll,
      style,
      ...elementProps
    },
    ref
  ) => (
    <div
      ref={ref}
      {...elementProps}
      style={{ width: 200, height: 80, backgroundColor: '#9bc0c7', ...style }}
    />
  )
);

const createColorBlockPlugin = (config = {}) => {
  const component = config.decorator
    ? config.decorator(ColorBlock)
    : ColorBlock;
  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent();
        const entity = contentState.getEntity(block.getEntityAt(0));
        const type = entity.getType();
        if (type === 'colorBlock') {
          return {
            component,
            editable: false,
          };
        }
      }
      return null;
    },
  };
};
ColorBlock.displayName = 'ColorBlock';
export default createColorBlockPlugin;
