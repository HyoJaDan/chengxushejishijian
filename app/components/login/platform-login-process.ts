import { userStatus } from '~/hooks/userStatus/userStatus';
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
  console.log(
    'retured value',
    isSucceed,
    thePoolAccessToken,
    thePoolStatus,
    thePoolId
  );
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
    alert('해당 아이디가 존재하지 않습니다. 다시 시도해 주세요');
    localStorage.removeItem('thePoolAccessToken');
    setLoginInfo({
      loginStatus: false,
    });
    navigate('/');
  }
}
