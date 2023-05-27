import Draft from 'draft-js';
import { Map } from 'immutable';

const blockRenderMap = Map({
  div: {
    element: 'div',
  },
});

export const extendedBlockRenderMap =
  Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);
