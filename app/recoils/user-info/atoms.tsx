/* eslint-disable no-shadow */
import { atom } from 'recoil';
import { recoilKeySuffix } from '../../utils/recoil-key';

interface IUserData {
  userNickName: string;
  userJobPool: string;
  userInterest: [];
}

/** userData에는 닉네임, 직업분야, 관심분야가 담겨있다. */
export const userData = atom<IUserData>({
  key: `UserData${recoilKeySuffix}`,
  default: {
    userNickName: 'undifined',
    userJobPool: 'undifined',
    userInterest: [],
  },
});

export enum platform {
  'Not_login' = 0,
  'KAKAO' = 1,
  'Google' = 2,
  'APPLE' = 3,
}
export interface ILoginInfo<platform> {
  isloggedin: boolean;
  platform: platform;
  name: string;
}

/** loginInformation에는 로그인 여부, 플랫폼, 사용자 이름 */
export const loginInformation = atom<ILoginInfo<platform>>({
  key: `info${recoilKeySuffix}`,
  default: {
    isloggedin: false,
    platform: platform.Not_login,
    name: '',
  },
});
