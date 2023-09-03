import axios from 'axios';
import type { EditorState } from 'draft-js';
import { convertToRaw } from 'draft-js';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '~/config/firebase.client';
import { lessonAddress } from '~/data/adress';

export const askSubmitFunction = async (
  editorState: EditorState,
  title: string,
  selectedId: number
) => {
  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  // JSON 객체를 문자열로 변환
  const jsonString = JSON.stringify(rawContentState);

  const moviesCollectionRef = collection(db, 'problems');
  const temp = new Date();
  const currentDate = temp.toLocaleDateString();

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title,
        releaseDate: currentDate,
        description: jsonString,
        categories: selectedId,
      });
    } catch (err) {
      console.error(err);
    }
  };

  await axios.post(`${lessonAddress}`, {
    levelId: 1,
    categoryId: selectedId,
    title,
    description: jsonString,
  });
  if (window !== null) {
    window.location.replace('/');
  }
};
