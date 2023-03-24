import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import type { IUserData } from '~/models/user';
import { localStorageData } from '~/recoils/user/common/login-information';
import { getUserData } from '~/recoils/user/user-data';

export const useManageUserInformation = () => {
  const getData = useRecoilValue(getUserData);
  const [localData, setLocalData] = useRecoilState(localStorageData);
  useEffect(() => {
    if (getData === false) {
      console.log('false');
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
        loginStatus: 'login',
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return getData as IUserData;
};
