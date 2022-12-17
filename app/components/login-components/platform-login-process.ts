import { userStatus } from '../../hooks/userStatus/userStatus';
import { setUser } from './setUser';

type LoginProcessProps = {
  OAuthresponse: string;
  platform: number;
  name: string | undefined;
  navigate: Function;
  setLoginInfo: Function;
};

export async function LoginProcess({
  OAuthresponse,
  platform,
  name,
  navigate,
  setLoginInfo,
}: LoginProcessProps) {
  const [thePoolAccessToken, thePoolStatus] = await setUser(
    OAuthresponse,
    platform
  );
  setLoginInfo({
    isloggedin: true,
    platform,
    name,
  });
  localStorage.setItem('thePoolAccessToken', thePoolAccessToken);

  if (thePoolStatus === userStatus.PENDING) {
    navigate('/login/account-info');
  } else if (thePoolStatus === userStatus.ACTIVE) {
    navigate('/');
  }
  navigate('/login/account-info');
}
