import axios from 'axios';
import type { EditorState } from 'draft-js';
import { convertToRaw } from 'draft-js';
import { solutionAddress } from '~/data/constants/adress';

export const submitFunc = async (
  editorState: EditorState,
  params: string,
  accessToken: string
) => {
  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);

  // JSON 객체를 문자열로 변환
  const jsonString = JSON.stringify(rawContentState);

  await axios.post(
    `${solutionAddress}`,
    {
      title: rawContentState.blocks[0].text,
      lessonId: Number(params),
      description: jsonString,
      relatedLink: 'https://github.com/the-pool/the-pool-api',
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (window !== null) {
    window.location.replace('/solution');
  }
};
