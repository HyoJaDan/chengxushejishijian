import { convertFromRaw } from 'draft-js';

export const convertJsonToDraft = (description: string) => {
  const parsedJson = JSON.parse(description);
  const contentState = {
    entityMap: parsedJson.entityMap,
    blocks: parsedJson.blocks,
  };
  const restoredContentState = convertFromRaw(contentState);
  return restoredContentState;
};
