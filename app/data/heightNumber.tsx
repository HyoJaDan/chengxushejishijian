import { atom } from 'recoil';

export const heightestProblemNumber = atom<number>({
  key: 'heightestProblemNumber',
  default: 0,
});
export const heightestSolutionNumber = atom<number>({
  key: 'heightestSolutionNumber',
  default: 0,
});
