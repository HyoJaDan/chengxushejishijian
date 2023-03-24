/* eslint-disable no-param-reassign */
import axios from 'axios';
import type { IQuestionCategories } from '~/data/recoils/qna/new-question/categories';

export const getNewQnACategory = async () => {
  const newValue = await axios
    .get('https://api.thepool.kr/api/questions/categories')
    .then((response) => response.data);
  newValue.forEach((element: IQuestionCategories) => {
    delete element.createdAt;
    element.isSelected = false;
  });
  return newValue;
};
