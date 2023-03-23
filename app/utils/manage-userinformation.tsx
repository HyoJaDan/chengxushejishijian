import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import type { IUserData } from '~/models/user';
import { loginInformation } from '~/recoils/user/common/login-information';
import { getUserData } from '~/recoils/user/user-data';

export const useManageUserInformation = () => {
  const getData = useRecoilValue(getUserData);
  const [userInformation, setUserInformation] =
    useRecoilState(loginInformation);
  useEffect(() => {
    if (getData === false) {
      console.log('false');
      setUserInformation({
        ...userInformation,
        loginStatus: false,
      });
    } else {
      setUserInformation({
        ...userInformation,
        id: getData.id,
        img: getData.thumbnail,
        name: getData.nickname,
        loginStatus: true,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return getData as IUserData;
};
