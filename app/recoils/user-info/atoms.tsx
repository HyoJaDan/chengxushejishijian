/* eslint-disable no-shadow */
import { atom } from 'recoil';
import { recoilKeySuffix } from '../../utils/recoil-key';

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

interface IUserData2 {
  introduce: string;
  skill: [];
  tag: [];
}
/** userData2에는 자기소개, 스킬, 추천 태그가 담겨있다. */
export const userData2 = atom<IUserData2>({
  key: `UserData2${recoilKeySuffix}`,
  default: {
    introduce: '반갑습니다',
    skill: ['Figma', 'Javascript', 3, 4, 5],
    tag: ['완벽주의자', '디테일의 신'],
  },
});

interface IClickSetting {
  skill: boolean;
  interest: boolean;
  tag: boolean;
}
export const clickSetting = atom<IClickSetting>({
  key: `clickSetting${recoilKeySuffix}`,
  default: {
    skill: false,
    interest: false,
    tag: false,
  },
});
