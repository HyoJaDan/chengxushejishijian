import axios from 'axios';
import { atom, selectorFamily } from 'recoil';
import type { ILesson } from '~/models/lessons';

export const categoryId = atom<string>({
  key: 'category-id',
  default: 'lessonSolutions',
});

export const getLessons = selectorFamily<ILesson[], string>({
  key: 'getLesson',
  get: (sortBy: string) => async () => {
    const userData = await axios
      .get(`https://api.thepool.kr/api/lessons?sortBy=${sortBy}`)
      .then((response) => {
        return response.data.lessons;
      })
      .catch(() => {
        return false;
      });
    return userData;
  },
});
