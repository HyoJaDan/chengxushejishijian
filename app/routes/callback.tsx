import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginProcess } from '~/components/login/platform-login-process';
import {
  loginInformation,
  platform,
  userAccessToken,
  userId,
} from '~/recoils/user/common/login-information';

export default function Callback() {
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInformation);
  const setId = useSetRecoilState(userId);
  const setAccessToken = useSetRecoilState(userAccessToken);
  useEffect(() => {
    const URLSearch = window.location.search;
    const [, AuthorizationCode] = URLSearch.split('=');
    loginProcess({
      OAuthresponse: AuthorizationCode,
      platform: platform.GITHUB,
      navigate,
      setLoginInfo,
      setId,
      setAccessToken,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
