import axios from 'axios';
import { atom, selectorFamily } from 'recoil';
import { solutionAddress } from '~/data/constants/adress';
import type { ISolutions } from '~/models/problem-and-solution/solution/solutions';

export const solutionCategoryId = atom<string>({
  key: 'solutionCategory-id',
  default: 'id',
});

export const getSolutionList = selectorFamily<ISolutions[], string>({
  key: 'getSolution',
  get: (sortBy: string) => async () => {
    const solutions = await axios
      .get(`${solutionAddress}?sortBy=${sortBy}`)
      .then((response) => {
        return response.data.solutions;
      })
      .catch(() => {
        return false;
      });
    return solutions;
  },
}); /* 
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
 */
