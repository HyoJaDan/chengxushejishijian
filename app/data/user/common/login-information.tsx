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
export const localStorageData = atom<ILoginInfo<loginType>>({
  key: 'localStorageData',
  default: {
    loginStatus: 'unChecked',
    name: '',
    accessToken: '',
    id: 0,
    img: '',
    job: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const loginStatus = selector({
  key: 'loginStatusSelector',
  get: ({ get }) => get(localStorageData).loginStatus,
  set: ({ set }, newValue) => {
    set(localStorageData, (oldValue) => ({
      ...oldValue,
      loginStatus: newValue as loginType,
    }));
  },
});
export const userId = selector({
  key: 'userId',
  get: ({ get }) => get(localStorageData).id,
  set: ({ set }, newValue) => {
    set(localStorageData, (oldValue) => ({
      ...oldValue,
      id: newValue as number,
    }));
  },
});
export const userAccessToken = selector<string>({
  key: 'userAccessToken',
  get: ({ get }) => get(localStorageData).accessToken,
  set: ({ set }, newValue) => {
    set(localStorageData, (oldValue) => ({
      ...oldValue,
      accessToken: newValue as string,
    }));
  },
});
export const changedLocalValue = atom<boolean>({
  key: 'changedLocalValue',
  default: false,
});
