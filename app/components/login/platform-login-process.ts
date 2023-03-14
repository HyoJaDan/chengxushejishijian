import { userStatus } from '~/hooks/userStatus/userStatus';
import { setUser } from './setUser';

type LoginProcessProps = {
  OAuthresponse: string;
  platform: number;
  navigate: Function;
  setLoginInfo: Function;
};

export async function loginProcess({
  OAuthresponse,
  platform,
  navigate,
  setLoginInfo,
}: LoginProcessProps) {
  const [isSucceed, data] = await setUser(OAuthresponse, platform);

  if (isSucceed) {
    setLoginInfo({
      loginStatus: true,
      platform,
      name: data?.member.nickname,
      accessToken: data?.accessToken,
      id: data?.member.id,
      img: data?.member.thumbnail,
    });
    if (data?.member.status === userStatus.PENDING) {
      navigate('/account-info');
    } else navigate('/');
  } else {
    // eslint-disable-next-line no-alert
    alert('해당 아이디가 존재하지 않습니다. 다시 시도해 주세요');
    localStorage.removeItem('currentUser');
    setLoginInfo({
      loginStatus: false,
    });
  }
}
