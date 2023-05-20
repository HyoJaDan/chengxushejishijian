import axios from 'axios';
import { selectorFamily } from 'recoil';
import type { ISolutionDetail } from '~/models/problem-and-solution/solution/solution-detail';
import { solutionAddress } from '../constants/adress';
import { myAccessToken } from '../user/common/login-information';

export const getSolutionDetail = selectorFamily<ISolutionDetail, string>({
  key: 'getSolutionDetail',
  get:
    (id: string) =>
    async ({ get }) => {
      const token = get(myAccessToken);
      const solutionDetail = await axios
        .get(`${solutionAddress}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          return response.data.solution;
        });
      return solutionDetail;
    },
});
