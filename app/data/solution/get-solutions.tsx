import axios from 'axios';
import { atom, selectorFamily } from 'recoil';
import { solutionAddress } from '~/data/constants/adress';
import type { ISolutions } from '~/models/problem-and-solution/solution/solutions';

export const solutionCategoryId = atom<string>({
  key: 'solutionCategory-id',
  default: 'id',
});
export const numOfSolution = atom<number>({
  key: 'numOfSolution',
  default: 0,
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
});
export const getSolutionListById = selectorFamily<ISolutions[], string>({
  key: 'getSolution',
  get: (id: string) => async () => {
    const solutions = await axios
      .get(`${solutionAddress}?lessonId=${id}`)
      .then((response) => {
        return response.data.solutions;
      })
      .catch(() => {
        return false;
      });
    return solutions;
  },
});
