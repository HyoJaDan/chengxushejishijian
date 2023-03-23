export interface IUserData {
  id: number;
  majorId: number;
  account: string;
  nickname: string;
  memberName: string;
  job: string;
  status: number;
  loginType: number;
  thumbnail: string;
  introduce: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}

export interface IUserDataAccountInfo {
  userNickName: string;
  userJobPool: string;
  userInterest: [];
}
interface IValue {
  value: string;
  isTrue: boolean;
}

export interface IUserDatatemp {
  nickName: string;
  jobPool: string;
  interest: IValue[];
  introduce: string;
  skill: IValue[];
  tag: IValue[];
}

/* undefined :확인한함 / false : 확인 → 아님 / true : logined 상태 */
export type loginType = undefined | boolean | 'shutDown';
// eslint-disable-next-line no-shadow
export interface ILoginInfo<loginType> {
  loginStatus: loginType;
  name: string;
  accessToken: string;
  id: number;
  img: string | null;
}
