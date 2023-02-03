import { userStatus } from '../../hooks/userStatus/userStatus';
import { setUser } from './setUser';

type LoginProcessProps = {
  OAuthresponse: string;
  platform: number;
  name: string | undefined;
  navigate: Function;
  setLoginInfo: Function;
  setUserId: Function;
};

export async function loginProcess({
  OAuthresponse,
  platform,
  name,
  navigate,
  setLoginInfo,
  setUserId,
}: LoginProcessProps) {
  const [isSucceed, thePoolAccessToken, thePoolStatus, thePoolId] =
    await setUser(OAuthresponse, platform);

  if (isSucceed) {
    setLoginInfo({
      isloggedin: true,
      platform,
      name,
    });
    setUserId(thePoolId);
    localStorage.setItem('thePoolAccessToken', thePoolAccessToken as string);
    if (thePoolStatus === userStatus.PENDING) {
      navigate('/login/account-info');
    } else if (thePoolStatus === userStatus.ACTIVE) {
      navigate('/');
    }
  } else {
    localStorage.removeItem('thePoolAccessToken');
  }
}
