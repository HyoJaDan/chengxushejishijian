import { atom } from 'recoil';
import { localStorageEffect } from './localStorageEffect';

export const userId = atom({
  key: 'userId',
  default: '',
  effects: [localStorageEffect('userId')],
});
