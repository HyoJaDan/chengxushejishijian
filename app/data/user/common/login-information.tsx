import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import type { ILoginInfo, loginType } from '~/models/my-page/user';

const localStorage =
  typeof window !== `undefined` ? window.localStorage : undefined;
const { persistAtom } = recoilPersist({
  key: 'currentUser',
  storage: localStorage,
});

/** 로컬스토리지에 저장한 유저의 정보 */
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
export const myId = selector({
  key: 'myId',
  get: ({ get }) => get(localStorageData).id,
  set: ({ set }, newValue) => {
    set(localStorageData, (oldValue) => ({
      ...oldValue,
      id: newValue as number,
    }));
  },
});

export const myAccessToken = selector<string>({
  key: 'myAccessToken',
  get: ({ get }) => get(localStorageData).accessToken,
  set: ({ set }, newValue) => {
    set(localStorageData, (oldValue) => ({
      ...oldValue,
      accessToken: newValue as string,
    }));
  },
});
