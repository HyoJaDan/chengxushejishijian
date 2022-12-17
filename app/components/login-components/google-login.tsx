import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from '@remix-run/react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { loginInformation, platform } from '~/recoils/user-info/atoms';
import { LoginProcess } from './platform-login-process';

export default function GoogleLogin() {
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInformation);

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (response) => {
      LoginProcess({
        OAuthresponse: response.code,
        platform: platform.Google,
        name: undefined,
        navigate,
        setLoginInfo,
      });
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div>
      <Google
        onClick={() => {
          login();
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
