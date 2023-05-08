import { atom } from 'recoil';

export const myPageId = atom<number | null>({
  key: 'myPageId',
  default: null,
});
