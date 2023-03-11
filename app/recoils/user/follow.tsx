import axios from 'axios';
import { selector } from 'recoil';
import { userId } from './common/user-id';

interface IFollow {
  numOfFollowers: number;
  numOfFollowings: number;
}

export const getFollower = selector<IFollow>({
  key: 'follower',
  get: async ({ get }) => {
    const id = get(userId);
    const numOfFollowers = await axios(
      `https://api.thepool.kr/api/member-friendship/followers?memberId=${id}`
    ).then((response) => {
      return response.data.totalCount;
    });
    const numOfFollowings = await axios(
      `https://api.thepool.kr/api/member-friendship/followings?memberId${id}`
    ).then((response) => response.data.totalCount);

    return { numOfFollowers, numOfFollowings };
  },
});
