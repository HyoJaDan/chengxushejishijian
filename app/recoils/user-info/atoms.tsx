/* eslint-disable no-shadow */
import { atom } from 'recoil';

interface IUserData {
  userNickName: string;
  userJobPool: string;
  userInterest: [];
}

/** userData에는 닉네임, 직업분야, 관심분야가 담겨있다. */
export const userData = atom<IUserData>({
  key: 'UserData',
  default: {
    userNickName: 'undifined',
    userJobPool: 'undifined',
    userInterest: [],
  },
});

export enum platform {
  'Not_login' = 'Not_login',
  'Google' = 'Google',
  'APPLE' = 'APPLE',
  'KAKAO' = 'KAKAO',
}
export interface ILoginInfo<platform> {
  isloggedin: boolean;
  platform: platform;
  name: string | undefined;
}

/** loginInformation에는 로그인 여부, 플랫폼, 사용자 이름 */
export const loginInformation = atom<ILoginInfo<platform>>({
  key: 'info',
  default: {
    isloggedin: false,
    platform: platform.Not_login,
    name: '',
  },
});
