import { useNavigate } from '@remix-run/react';
import KakaoLogin from 'react-kakao-login';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { KAKAO_JS_API } from '~/constants/oAuth';
import { loginInformation, platform } from '~/recoils/user-info/atoms';
import { GetUserInfo } from './platform-login-process';

export default function Kakao() {
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInformation);
  return (
    <Wrapper
      token={KAKAO_JS_API}
      onSuccess={(response) => {
        console.log('OAuth accessToken', response.response.access_token);
        GetUserInfo(
          response.response.access_token,
          platform.KAKAO,
          response.profile?.properties.nickname,
          navigate,
          setLoginInfo
        );
      }}
      onFail={(error) => console.log(error)}
    >
      카카오톡으로 계속하기
    </Wrapper>
  );
}
const Wrapper = styled(KakaoLogin)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 463px !important;
  height: 80px !important;
  border-radius: 15px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 24px !important;
  cursor: pointer !important;
`;
