import axios from 'axios';
import { atom, selectorFamily } from 'recoil';
import { lessonAddress } from '~/data/constants/adress';
import type { ILessons } from '~/models/lesson/lessons';

export const categoryId = atom<string>({
  key: 'category-id',
  default: 'lessonSolutions',
});

export const getLessons = selectorFamily<ILessons[], string>({
  key: 'getLesson',
  get: (sortBy: string) => async () => {
    const userData = await axios
      .get(`${lessonAddress}?sortBy=${sortBy}`)
      .then((response) => {
        return response.data.lessons;
      })
      .catch(() => {
        return false;
      });
    return userData;
  },
});
/*  https://api.thepool.kr/api/lessons?categoryId=1 */
export const getLessonsById = selectorFamily<ILessons[], number>({
  key: 'getLesson',
  get: (id: number) => async () => {
    const userData = await axios
      .get(`${lessonAddress}?categoryId=${id}`)
      .then((response) => {
        return response.data.lessons;
      })
      .catch(() => {
        return false;
      });
    return userData;
  },
});
