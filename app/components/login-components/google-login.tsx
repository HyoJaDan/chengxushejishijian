import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from '@remix-run/react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { loginInformation, platform, userId } from '~/recoils/user-info/atoms';
import { LoginProcess } from './platform-login-process';

export default function GoogleLogin() {
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInformation);
  const setUserId = useSetRecoilState(userId);
  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (response) => {
      console.log(response);
      LoginProcess({
        OAuthresponse: response.code,
        platform: platform.Google,
        name: undefined,
        navigate,
        setLoginInfo,
        setUserId,
      });
    },
  });

  return (
    <div>
      <Google
        onClick={() => {
          login();
        }}
      >
        <img src='/icons/google.svg' alt='google' />
        구글로 계속하기
      </Google>
    </div>
  );
}
const Google = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 80px;
  gap: 8px;
  width: 330px;
  height: 72px;
  background: #ffffff;
  border: 1px solid #efedea;
  border-radius: 8px;
  cursor: pointer;

  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #484746;
`;
