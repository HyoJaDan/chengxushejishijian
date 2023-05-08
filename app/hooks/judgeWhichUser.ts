import { useRecoilValue } from 'recoil';
import { localStorageData } from '~/data/user/common/login-information';
import { getUserData } from '~/data/user/user-data';
import type { IUserData } from '~/models/user/user';

export const JudgeWhichUser = (id: number): string => {
  /* const setId = useSetRecoilState(myPageId);
  const userData: IUserData = useRecoilValue(getUserData(id));
  const myData = useRecoilValue(localStorageData);
  만약 본인이라면 닉네임 리턴
  if (userData.nickname === myData.name) return myData.name;

  본인이 아니라면
  setId(id);
  return userData.nickname; */
};
