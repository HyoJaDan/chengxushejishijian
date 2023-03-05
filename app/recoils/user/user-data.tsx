/* eslint-disable no-shadow */
import axios from 'axios';
import { atom, selector } from 'recoil';
import { recoilKeySuffix } from '../../utils/recoil-key';
import { userId } from './user-id';

export interface IValue {
  value: string;
  isTrue: boolean;
}

export interface IUserData {
  nickName: string;
  jobPool: string;
  interest: IValue[];
  introduce: string;
  skill: IValue[];
  tag: IValue[];
}
/** userData에는 닉네임, 직업분야, 관심분야가 담겨있다. */
export const userData = atom<IUserData>({
  key: `UserData${recoilKeySuffix}`,
  default: {
    nickName: '배고플땐밥먹어',
    jobPool: '프로덕트 디자이너',
    interest: [
      { value: '백엔드 개발', isTrue: false },
      { value: 'IOS', isTrue: false },
      { value: 'Android', isTrue: false },
      { value: 'UX/UI', isTrue: false },
      { value: 'BX', isTrue: false },
      { value: 'WEB 개발', isTrue: false },
      { value: '기타 디자인', isTrue: false },
      { value: '기타 개발', isTrue: false },
    ],
    introduce: '반갑습니다',
    skill: [
      { value: 'Figma', isTrue: true },
      { value: 'Sketch', isTrue: true },
      { value: 'Javascript', isTrue: true },
      { value: '교육', isTrue: true },
      { value: 'HTML', isTrue: false },
      { value: 'CSS', isTrue: false },
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
      { value: '디테일의 신', isTrue: true },
      { value: '바람의 손', isTrue: true },
    ],
  },
});

export const userJobPoolSelector = selector({
  key: `userJobPool${recoilKeySuffix}`,
  get: ({ get }) => get(userData).jobPool,
  set: ({ set }, newValue) => {
    set(userData, (oldValue) => ({ ...oldValue, jobPool: newValue as string }));
  },
});

export type IClickSetting = 'skill' | 'interest' | 'tag' | undefined;
export const clickSetting = atom<IClickSetting>({
  key: `clickSetting${recoilKeySuffix}`,
  default: undefined,
});

export const getUserData = selector({
  key: 'temp',
  get: async ({ get }) => {
    const id = get(userId);
    const userData = await axios
      .get(`https://api.thepool.kr/api/members/${id}`)
      .then((response) => {
        return response.data.member;
      })
      .catch(() => {
        return false;
      });
    return userData;
  },
});
