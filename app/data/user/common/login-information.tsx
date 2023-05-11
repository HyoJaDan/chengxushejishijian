import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import type { ILoginInfo, loginType } from '~/models/user/user';

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
/* export const changedLocalValue = atom<boolean>({
  key: 'changedLocalValue',
  default: false,
});
 */
