import { useEffect } from 'react';
import type { SetterOrUpdater } from 'recoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  changedLocalValue,
  localStorageData,
} from '~/data/user/common/login-information';
import { getUserData } from '~/data/user/user-data';
import type { ILoginInfo, IUserData, loginType } from '~/models/user/user';

export const useManageUserInformation = (): [
  IUserData,
  ILoginInfo<loginType>,
  SetterOrUpdater<ILoginInfo<loginType>>
] => {
  const userData = useRecoilValue(getUserData);
  const [localData, setLocalData] = useRecoilState(localStorageData);
  const [isChanged, setIsChanged] = useRecoilState(changedLocalValue);
  useEffect(() => {
    if (userData === false) {
      setLocalData({
        ...localData,
        loginStatus: 'unLogin',
      });
    } else if (isChanged) {
      setIsChanged(false);
    } else {
      setLocalData({
        ...localData,
        id: userData.id,
        img: userData.thumbnail,
        name: userData.nickname,
        job: userData.job,
        loginStatus: 'login',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [
    userData as IUserData,
    localData as ILoginInfo<loginType>,
    setLocalData,
  ];
};
