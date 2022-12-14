import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { loginInformation, platform } from '~/recoils/user-info/atoms';
/* import { setUser } from './setUser'; */

export default function GoogleLogin() {
  const setLoginInfo = useSetRecoilState(loginInformation);

  const login2 = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );
      setLoginInfo({
        isloggedin: true,
        platform: platform.Google,
        name: userInfo.data.name,
      });
      console.log('OAuth accessToken', tokenResponse);
      console.log('userInfo', userInfo);
      /* setUser(tokenResponse.access_token, 2); */
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div>
      <Google
        onClick={() => {
          login2();
        }}
      >
        구글로 계속하기
      </Google>
    </div>
  );
}
const Google = styled.div`
  width: 463px;
  height: 80px;
  background: #eeeeee;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
/* const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      console.log('1', codeResponse);
      const response = await axios.post(
        'https://api.thepool.kr/api/members/social',
        {
          accessToken: codeResponse.code,
          oAuthAgency: 2,
        }
      );
      console.log('codeResponse', codeResponse);
      console.log('OAuth', response);
      await setUser(codeResponse.code, platform.Google);
    },
    onError: (errorResponse) => console.log(errorResponse),
  }); */
