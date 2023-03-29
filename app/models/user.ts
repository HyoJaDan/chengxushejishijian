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

/** unchecked : 확인 안함, login : 로그인해야됨, unLogin : 로그인함 */
export type loginType = 'unChecked' | 'login' | 'unLogin';
// eslint-disable-next-line no-shadow
export interface ILoginInfo<loginType> {
  loginStatus: loginType;
  name: string;
  accessToken: string;
  id: number;
  img: string;
  job: string;
}
