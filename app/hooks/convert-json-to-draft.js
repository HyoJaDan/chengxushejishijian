import { convertFromRaw } from 'draft-js';

export const convertJsonToDraft = (description) => {
  /* const temp =
    '{"blocks":[{"key":"9grlq","text":"你看看typescript和data不一样","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5194k","text":"\\nexport interface archiveTasks {\\n  outputTasks(): Promise<task[]>;\\n}\\n\\nexport interface task {\\n  date: string;\\n  name: string;\\n  previewUrl: string;\\n}","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5v74","text":"export const mockArchive: archiveTasks = {\\n  outputTasks: async () => [\\n    {\\n      date: \'22.12.10\',\\n      name: \'hello\',\\n    },\\n  ]\\n}","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}'; */
  const parsedJson = JSON.parse(description);
  const contentState = {
    entityMap: parsedJson.entityMap,
    blocks: parsedJson.blocks,
  };
  const restoredContentState = convertFromRaw(contentState);
  return restoredContentState;
};
