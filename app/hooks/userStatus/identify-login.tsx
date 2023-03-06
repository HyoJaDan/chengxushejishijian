import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginStatus } from '~/recoils/user/login-information';

export const useIdentifyLogin = (isTrue: boolean) => {
  const setType = useSetRecoilState(loginStatus);
  useEffect(() => {
    if (isTrue) setType(true);
    else setType(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
