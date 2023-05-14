import axios from 'axios';
import { selectorFamily } from 'recoil';
import type { IProblemStatistics } from '~/models/my-page/problemStatistics';
import { memberDataAdress } from '../constants/adress';

export const problemStatistics = selectorFamily<IProblemStatistics, string>({
  key: 'problemStatistics',
  get: (id: string) => async () => {
    const statistics = await axios(
      `${memberDataAdress}/${id}/lesson-solution-statistics`
    ).then((res) => {
      return res.data;
    });
    return statistics;
  },
});
