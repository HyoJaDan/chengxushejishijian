import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginProcess } from '~/components/login/platform-login-process';
import { loginInformation, platform } from '~/recoils/user/login-information';

export default function Callback() {
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInformation);
  useEffect(() => {
    const URLSearch = window.location.search;
    const [, AuthorizationCode] = URLSearch.split('=');
    loginProcess({
      OAuthresponse: AuthorizationCode,
      platform: platform.GITHUB,
      name: '',
      navigate,
      setLoginInfo,
    });
  });
  return null;
}
