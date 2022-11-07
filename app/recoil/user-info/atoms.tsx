/* eslint-disable no-shadow */
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

export enum platform{
  "Not_login"="Not_login",
  "Google" = "Google",
  "APPLE" = "APPLE",
  "KAKAO"="KAKAO",
}
interface ILoginInfo<platform>{
  isloggedin: boolean;
  platform: platform;
  name: string;
}
export const loginInformation = atom<ILoginInfo<platform>>({
  key: "info",
  default: {
    isloggedin: false,
    platform: platform.Not_login,
    name: "",
  },
})