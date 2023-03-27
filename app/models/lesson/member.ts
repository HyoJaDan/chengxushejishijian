export interface IMember {
  id: number;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string;
  majorId: number | null;
  account: string;
  nickname: string;
  memberName: string;
  job: string;
  status: number;
  loginType: number;
  introduce: string;
  thumbnail: string;
}
