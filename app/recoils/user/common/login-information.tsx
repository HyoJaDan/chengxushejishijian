import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const localStorage =
  typeof window !== `undefined` ? window.localStorage : undefined;
const { persistAtom } = recoilPersist({
  key: 'currentUser',
  storage: localStorage,
});

/* eslint-disable no-shadow */
export enum platform {
  'Not_login' = 0,
  'KAKAO' = 1,
  'Google' = 2,
  'APPLE' = 3,
  'GITHUB' = 4,
}
/* undefined :확인한함 / false : 확인 → 아님 / true : logined 상태 */
export type loginType = undefined | boolean | 'shutDown';
export interface ILoginInfo<platform, loginType> {
  loginStatus: loginType;
  platform: platform;
  name: string;
  accessToken: string;
  id: number;
  img: string | null;
}

/** loginInformation에는 로그인 여부, 플랫폼, 사용자 이름 */
export const loginInformation = atom<ILoginInfo<platform, loginType>>({
  key: 'loginInformation',
  default: {
    loginStatus: undefined,
    platform: platform.Not_login,
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
  key: 'loginStatusSelector',
  get: ({ get }) => get(loginInformation).accessToken,
  set: ({ set }, newValue) => {
    set(loginInformation, (oldValue) => ({
      ...oldValue,
      accessToken: newValue as string,
    }));
  },
});
