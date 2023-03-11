import { atom } from 'recoil';
import { localStorageEffect } from './localStorageEffect';

export const userAccessToken = atom({
  key: 'userAccessToken',
  default: '',
  effects: [localStorageEffect('thePoolAccessToken')],
});
