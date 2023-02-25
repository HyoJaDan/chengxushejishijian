import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loginStatus } from '~/recoils/user/login-information';

export const useIdentifyLogin = () => {
  const [type, setType] = useRecoilState(loginStatus);

  useEffect(() => {
    if (type === undefined || type === 'shutDown') {
      setType(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
