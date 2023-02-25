import { atom, selector } from 'recoil';
import { recoilKeySuffix } from '~/utils/recoil-key';

/* eslint-disable no-shadow */
export enum platform {
  'Not_login' = 0,
  'KAKAO' = 1,
  'Google' = 2,
  'APPLE' = 3,
  'GITHUB' = 4,
}
/* undefined :확인한함 / false : 확인 -> 아니니까 로그인페이지 킴 / true : logined 상태 / 강제종료 상태 */
/* undefined :확인한함 / false : 확인 → 아님 / true : logined 상태 */
export type loginType = undefined | boolean | 'shutDown';
export interface ILoginInfo<platform, loginType> {
  loginStatus: loginType;
  platform: platform;
  name: string;
  id: undefined | number;
}

/** loginInformation에는 로그인 여부, 플랫폼, 사용자 이름 */
export const loginInformation = atom<ILoginInfo<platform, loginType>>({
  key: `info${recoilKeySuffix}`,
  default: {
    loginStatus: undefined,
    platform: platform.Not_login,
    name: '',
    id: undefined,
  },
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
  key: 'IdSelector',
  get: ({ get }) => get(loginInformation).id,
  set: ({ set }, newValue) => {
    set(loginInformation, (oldValue) => ({
      ...oldValue,
      id: newValue as number,
    }));
  },
});
