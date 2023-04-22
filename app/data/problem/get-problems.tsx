import axios from 'axios';
import { atom, selectorFamily } from 'recoil';
import { lessonAddress } from '~/data/constants/adress';
import type { IProblems } from '~/models/problem/problems';

export const categoryId = atom<string>({
  key: 'category-id',
  default: 'createdAt',
});

export const getProblems = selectorFamily<IProblems[], string>({
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
export const getProblemsById = selectorFamily<IProblems[], number>({
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
