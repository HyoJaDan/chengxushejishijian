import axios from 'axios';
import { selector } from 'recoil';
import { endpointBase } from '~/data/constants/adress';
import { myId } from '../user/common/login-information';

interface IStatistics {
  lessonCount: number;
  solutionCount: number;
  feedbackCount: number;
  followerCount: number;
}

export const memberStatistics = selector<IStatistics>({
  key: 'memberStatistics',
  get: async ({ get }) => {
    const id = get(myId);

    const statistics = await axios(
      `${endpointBase}/api/member-statistics/${id}`
    ).then((res) => {
      return {
        lessonCount: res.data.memberStatistics.lessonCount,
        solutionCount: res.data.memberStatistics.solutionCount,
        feedbackCount: res.data.memberStatistics.feedbackCount,
        followerCount: res.data.memberStatistics.followerCount,
      };
    });
    return statistics;
  },
});
