import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { localStorageData } from '~/data/user/common/login-information';
import { getUserData } from '~/data/user/user-data';
import type { IUserData } from '~/models/user';

export const useManageUserInformation = () => {
  const getData = useRecoilValue(getUserData);
  const [localData, setLocalData] = useRecoilState(localStorageData);
  useEffect(() => {
    if (getData === false) {
      setLocalData({
        ...localData,
        loginStatus: 'unLogin',
      });
    } else {
      setLocalData({
        ...localData,
        id: getData.id,
        img: getData.thumbnail,
        name: getData.nickname,
        job: getData.job,
        loginStatus: 'login',
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return getData as IUserData;
};
