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

export interface IValue {
  value: string;
  isTrue: boolean;
}

interface IUserData {
  userNickName: string;
  userJobPool: string;
  userInterest: IValue[];
}

/** userData에는 닉네임, 직업분야, 관심분야가 담겨있다. */
export const userData = atom<IUserData>({
  key: `UserData${recoilKeySuffix}`,
  default: {
    userNickName: 'undifined',
    userJobPool: 'undifined',
    userInterest: [
      { value: '백엔드개발', isTrue: false },
      { value: 'IOS', isTrue: false },
      { value: 'Android', isTrue: false },
      { value: 'UX/UI', isTrue: false },
      { value: 'BX', isTrue: false },
      { value: 'WEB개발', isTrue: false },
      { value: '기타디자인', isTrue: false },
      { value: '기타개발', isTrue: false },
    ],
  },
});

interface IUserData2 {
  introduce: string;
  skill: IValue[];
  tag: IValue[];
}
/** userData2에는 자기소개, 스킬, 추천 태그가 담겨있다. */
export const userData2 = atom<IUserData2>({
  key: `UserData2${recoilKeySuffix}`,
  default: {
    introduce: '반갑습니다',
    skill: [
      { value: 'HTML', isTrue: true },
      { value: 'CSS', isTrue: true },
      { value: 'Javascript', isTrue: true },
      { value: 'Typescript', isTrue: false },
      { value: 'React', isTrue: false },
      { value: 'IOS개발', isTrue: false },
      { value: '안드로이드 개발', isTrue: false },
      { value: 'DevOps', isTrue: false },
      { value: '보안', isTrue: false },
      { value: '블록체인 개발', isTrue: false },
    ],
    tag: [
      { value: '완벽주의자', isTrue: true },
      { value: '디테일의신', isTrue: false },
    ],
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
