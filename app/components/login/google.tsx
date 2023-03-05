import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from '@remix-run/react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { loginInformation, platform } from '~/recoils/user/login-information';
import { userAccessToken } from '~/recoils/user/user-accesstoken';
import { userId } from '~/recoils/user/user-id';

import { loginProcess } from './platform-login-process';

export default function GoogleLogin() {
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInformation);
  const setId = useSetRecoilState(userId);
  const setAccessToken = useSetRecoilState(userAccessToken);
  const login = useGoogleLogin({
    onSuccess: (response) => {
      loginProcess({
        OAuthresponse: response.access_token,
        platform: platform.Google,
        navigate,
        setLoginInfo,
        setId,
        setAccessToken,
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
