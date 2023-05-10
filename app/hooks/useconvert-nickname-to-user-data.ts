import axios from 'axios';
import {
  endpointBase,
  manageFollowesAddress,
  memberDataAdress,
} from '~/data/constants/adress';
import type { IUserData } from '~/models/user/user';

export interface IFollow {
  numOfFollowers: number;
  numOfFollowings: number;
}

export const useConvertNickNameToUserData = async ({
  nickName,
}: {
  nickName: string;
}): Promise<[IUserData, IFollow]> => {
  console.log('2. useConvertNickNameToID에서 받은 유저 닉네임', nickName);
  const userId = await axios(`${endpointBase}/api/member-statistics`).then(
    (res) => {
      const temp = (data: { member: { nickname: string } }) =>
        data.member.nickname === nickName;
      const index = res.data.memberStatisticsList.findIndex(temp);
      return res.data.memberStatisticsList[index].member.id;
    }
  );
  console.log('3. 반환한 ID', userId);

  const userData = await axios
    .get(`${memberDataAdress}/${userId}`)
    .then((response) => {
      return response.data.member;
    });
  /*  .catch(() => {
      return defaultUserData;
    }); */
  const numOfFollowers = await axios(
    `${manageFollowesAddress.follow}?memberId=${userId}`
  ).then((response) => {
    return response.data.totalCount;
  });
  const numOfFollowings = await axios(
    `${manageFollowesAddress.following}?memberId${userId}`
  ).then((response) => response.data.totalCount);

  return [userData, { numOfFollowers, numOfFollowings }];
};
