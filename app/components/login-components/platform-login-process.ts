import { userStatus } from '../../hooks/userStatus/userStatus';
import { setUser } from './setUser';

type LoginProcessProps = {
  OAuthresponse: string;
  platform: number;
  name: string | undefined;
  navigate: Function;
  setLoginInfo: Function;
};

export async function loginProcess({
  OAuthresponse,
  platform,
  name,
  navigate,
  setLoginInfo,
}: LoginProcessProps) {
  const [isSucceed, thePoolAccessToken, thePoolStatus, thePoolId] =
    await setUser(OAuthresponse, platform);

  if (isSucceed) {
    setLoginInfo({
      loginStatus: true,
      platform,
      name,
      id: thePoolId,
    });
    localStorage.setItem('thePoolAccessToken', thePoolAccessToken as string);

    if (thePoolStatus === userStatus.PENDING) {
      navigate('/account-info');
    }
  } else {
    localStorage.removeItem('thePoolAccessToken');
    setLoginInfo({
      loginStatus: false,
    });
    navigate('/account-info');
  }
}
