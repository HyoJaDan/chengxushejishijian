import axios from 'axios';
import { atom, selector } from 'recoil';
import type { newQuestionType } from '~/services/qna/interface';
import { questionCategories } from './categories';

export const getNumber = selector({
  key: 'Idx',
  get: ({ get }) => {
    const list = get(questionCategories);
    const Idx = list.findIndex((element) => element.isSelected === true);
    return Idx;
  },
});

const RealContent = selector<newQuestionType>({
  key: 'RealQnAContent',
  get: async ({ get }) => {
    const Idx = get(getNumber);
    const data = await axios
      .get(`https://api.thepool.kr/api/questions/categories/${Idx}`)
      .then((response) => {
        console.log(response.data);
        return response.data.json();
      });
    return data;
  },
});
export const mockContent = selector({
  key: 'mockQnAContent',
  get: async ({ get }) => {
    const Idx = get(getNumber);
    const contents = [
      {
        area: 1,
        title: 'question title',
        tags: ['태그_1', '태그_2', '태그_3'],
        numOfAnswers: 12,
        nickName: '전성호',
        views: 13,
        date: 2021.01,
      },
      {
        area: 1,
        title: 'question title',
        tags: ['태그 1', '태그 2', '태그 3'],
        numOfAnswers: 1,
        nickName: '전성호',
        views: 1,
        date: 2021.02,
      },
      {
        area: 2,
        title: 'question title',
        tags: ['태그 1', '태그 2', '태그 3'],
        numOfAnswers: 6,
        nickName: '전성호',
        views: 5,
        date: 2021.03,
      },
    ];
    if (Idx === 0) return contents;
    return contents.filter((element) => element.area === Idx);
  },
});

export const newContent = atom({
  key: 'QnAContent',
  /* default: process.env.NODE_ENV === 'development' ? mockContent : RealContent, */
  default: mockContent,
});
