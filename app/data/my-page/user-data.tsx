/* eslint-disable no-shadow */
import axios from 'axios';
import { atom, selectorFamily } from 'recoil';
import { memberDataAdress } from '~/data/constants/adress';
import type { IUserData } from '~/models/my-page/user';

const defaultUserData: IUserData = {
  id: 0,
  majorId: 0,
  account: '',
  nickname: '',
  memberName: '',
  job: '',
  status: 0,
  loginType: 0,
  thumbnail: '',
  introduce: '',
  createdAt: '',
  updatedAt: '',
  deletedAt: null,
  memberSocialLinkMappings: [
    {
      id: 0,
      createdAt: '',
      memberId: 0,
      memberSocialLinkId: 0,
      url: '',
    },
  ],
};

/** 마이페이지에서 사용할 유저의 정보, 아래 두 함수를 통해 값을 받아오고, 이를 다시 하지 않기 위해 로컬로 저장하는 함수 */
export const localUserData = atom<IUserData>({
  key: 'localUserData',
  default: defaultUserData,
});

/** getUserData : 백엔드에서 받아온 유저의 정보 */
export const getUserData = selectorFamily<IUserData, string>({
  key: 'getUserData',
  get: (params: string) => async () => {
    const userData = await axios
      .get(`${memberDataAdress}/${params}`)
      .then((response) => {
        return response.data.member;
      })
      .catch(() => {
        return defaultUserData;
      });
    return userData;
  },
});
