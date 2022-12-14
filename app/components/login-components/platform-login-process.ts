import { userStatus } from '../../hooks/userStatus/userStatus';
import { setUser } from './setUser';

export async function GetUserInfo(
  OAuthresponse: string,
  platform: number,
  name: string | undefined,
  navigate: Function,
  setLoginInfo: Function
) {
  const [thePoolAccessToken, thePoolStatus] = await setUser(
    OAuthresponse,
    platform
  );

  console.log('thePoolAccessToken', thePoolAccessToken);
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
