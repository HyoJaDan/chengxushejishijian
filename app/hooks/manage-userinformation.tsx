import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getUserData, localUserData } from '~/data/my-page/user-data';
import {
  changedLocalValue,
  localStorageData,
} from '~/data/user/common/login-information';
import type { ILoginInfo, IUserData, loginType } from '~/models/user/user';

export const useManageUserInformation = (userId: string) => {
  /* const [temp]: [
    IUserData,
    ILoginInfo<loginType>,
    SetterOrUpdater<ILoginInfo<loginType>>,
    boolean
  ]; */
  console.log('5. manage-userInformation에서 반환된 유저 id', userId);
  const [localData, setLocalData] = useRecoilState(localStorageData);
  const [isChanged, setIsChanged] = useRecoilState(changedLocalValue);
  const setLocalUserData = useSetRecoilState(localUserData);
  const userData = useRecoilValue(getUserData(userId as unknown as string));
  console.log('hello', userData);

  /** 지금 구하고자 하는 유저의 정보가 본인일 경우 */
  if (localData.id === userData.id) {
    /** 마이페이지 수정하기에서 값이 바뀐 경우, 거기서 이미 내 정보를 수정했으니 아무것도 안한다. */
    if (isChanged) {
      setIsChanged(false);
    } else {
      /** 새 정보를 받아오고, 이게 본인인경우, localData를 업데이트 시킨다. localUserData도 업데이트 시켜 값을 다시 받는것을 방지한다. */
      setLocalData({
        ...localData,
        id: userData.id,
        img: userData.thumbnail,
        name: userData.nickname,
        job: userData.job,
        loginStatus: 'login',
      });
      /* setLocalUserData(); */
    }
  }

  return [
    userData as IUserData,
    localData as ILoginInfo<loginType>,
    setLocalData,
    false,
  ];
};
