import { atom } from "recoil";

interface IUserData{
  userName: string;
  userPool: string;
  checkbox: [];
}

export const Datas = atom<IUserData[]>({
  key:"UserData",
  default:[],
})

export const UserPool = atom({
  key: "userPool",
  default: "Initial",
});