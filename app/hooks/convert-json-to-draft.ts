import { convertFromRaw } from 'draft-js';

export const convertJsonToDraft = (description: string) => {
  const parsedJson = JSON.parse(description);
  console.log(parsedJson);
  const contentState = {
    entityMap: parsedJson.entityMap,
    blocks: parsedJson.blocks,
  };
  const restoredContentState = convertFromRaw(contentState);
  return restoredContentState;
};
