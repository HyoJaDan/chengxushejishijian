/* eslint-disable no-shadow */
import axios from 'axios';
import { selector } from 'recoil';
import { memberDataAdress } from '~/data/constants/adress';
import type { IUserData } from '~/models/user/user';
import { userId } from './common/login-information';

/** getUserData : 백엔드에서 받아온 유저의 정보 */
export const getUserData = selector<IUserData | false>({
  key: 'getUserData',
  get: async ({ get }) => {
    const id = get(userId);
    const userData = await axios
      .get(`${memberDataAdress}/${id}`)
      .then((response) => {
        return response.data.member;
      })
      .catch(() => {
        return false;
      });
    return userData;
  },
});
