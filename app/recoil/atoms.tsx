import { atom } from "recoil";

/* 전체 */
interface IUserData{
  userName: string;
  userPool: string;
  checkbox: [];
}
/*  아톰 */
export const Datas = atom<IUserData[]>({
  key:"UserData",
  default:[],
})