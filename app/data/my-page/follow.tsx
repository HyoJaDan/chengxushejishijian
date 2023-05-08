import axios from 'axios';
import { selectorFamily } from 'recoil';
import { manageFollowesAddress } from '~/data/constants/adress';

interface IFollow {
  numOfFollowers: number;
  numOfFollowings: number;
}

export const getFollower = selectorFamily<IFollow, string>({
  key: 'follower',
  get:
    (id: string) =>
    async ({ get }) => {
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
