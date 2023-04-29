import axios from 'axios';
import { selector } from 'recoil';
import type { IProblemStatistics } from '~/models/user/problemStatistics';
import { memberDataAdress } from '../constants/adress';
import { userId } from './common/login-information';

export const problemStatistics = selector<IProblemStatistics>({
  key: 'problemStatistics',
  get: async ({ get }) => {
    const id = get(userId);
    const statistics = await axios(
      `${memberDataAdress}/${id}/lesson-solution-statistics`
    ).then((res) => {
      return res.data;
    });
    return statistics;
  },
});
