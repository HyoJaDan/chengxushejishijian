import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import type { ILoginInfo, loginType } from '~/models/user';

const localStorage =
  typeof window !== `undefined` ? window.localStorage : undefined;
const { persistAtom } = recoilPersist({
  key: 'currentUser',
  storage: localStorage,
});

/* eslint-disable no-shadow */
export const loginInformation = atom<ILoginInfo<loginType>>({
  key: 'loginInformation',
  default: {
    loginStatus: undefined,
    name: '',
    accessToken: '',
    id: 0,
    img: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export const loginStatus = selector({
  key: 'loginStatusSelector',
  get: ({ get }) => get(loginInformation).loginStatus,
  set: ({ set }, newValue) => {
    set(loginInformation, (oldValue) => ({
      ...oldValue,
      loginStatus: newValue as boolean | undefined,
    }));
  },
});
export const userId = selector({
  key: 'userId',
  get: ({ get }) => get(loginInformation).id,
  set: ({ set }, newValue) => {
    set(loginInformation, (oldValue) => ({
      ...oldValue,
      id: newValue as number,
    }));
  },
});
export const userAccessToken = selector({
  key: 'userAccessToken',
  get: ({ get }) => get(loginInformation).accessToken,
  set: ({ set }, newValue) => {
    set(loginInformation, (oldValue) => ({
      ...oldValue,
      accessToken: newValue as string,
    }));
  },
});
