import axios from 'axios';
import { selector } from 'recoil';
import { manageFollowesAddress } from '~/data/constants/adress';
import { userId } from './common/login-information';

interface IFollow {
  numOfFollowers: number;
  numOfFollowings: number;
}

export const getFollower = selector<IFollow>({
  key: 'follower',
  get: async ({ get }) => {
    const id = get(userId);
    const numOfFollowers = await axios(
      `${manageFollowesAddress.follow}?memberId=${id}`
    ).then((response) => {
      return response.data.totalCount;
    });
    const numOfFollowings = await axios(
      `${manageFollowesAddress.following}?memberId${id}`
    ).then((response) => response.data.totalCount);

    return { numOfFollowers, numOfFollowings };
  },
});
