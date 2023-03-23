import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginProcess } from '~/components/login/platform-login-process';
import { platform } from '~/models/platform';
import { localStorageData } from '~/recoils/user/common/login-information';

export default function Callback() {
  const navigate = useNavigate();
  const setLocalData = useSetRecoilState(localStorageData);
  useEffect(() => {
    const URLSearch = window.location.search;
    const [, AuthorizationCode] = URLSearch.split('=');
    loginProcess({
      OAuthresponse: AuthorizationCode,
      platform: platform.GITHUB,
      navigate,
      setLocalData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
