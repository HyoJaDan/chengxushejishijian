import { atom } from 'recoil';

export const userId = atom<number>({
  key: 'userId',
  default: 0,
});
