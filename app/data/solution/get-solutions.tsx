import axios from 'axios';
import { selectorFamily } from 'recoil';
import { solutionAddress } from '~/data/constants/adress';
import type { ISolutions } from '~/models/problem-and-solution/solution/solutions';

/* export const categoryId = atom<string>({
  key: 'category-id',
  default: 'createdAt',
});
 */
export const getSolutions = selectorFamily<ISolutions[], string>({
  key: 'getSolution',
  get: (sortBy: string) => async () => {
    const userData = await axios
      .get(`${solutionAddress}`)
      .then((response) => {
        return response.data.solutions;
      })
      .catch(() => {
        return false;
      });
    return userData;
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
