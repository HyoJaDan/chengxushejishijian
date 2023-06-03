import axios from 'axios';
import type { EditorState } from 'draft-js';
import { convertToRaw } from 'draft-js';
import { lessonAddress } from '~/data/constants/adress';

export const askSubmitFunction = async (
  editorState: EditorState,
  title: string,
  selectedId: number,
  accessToken: string
) => {
  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  // JSON 객체를 문자열로 변환
  const jsonString = JSON.stringify(rawContentState);

  await axios.post(
    `${lessonAddress}`,
    {
      levelId: 1,
      categoryId: selectedId,
      title,
      description: jsonString,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (window !== null) {
    window.location.replace('/');
  }
};
