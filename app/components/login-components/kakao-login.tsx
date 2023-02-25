import { useLoaderData, useNavigate } from '@remix-run/react';
import KakaoLogin from 'react-kakao-login';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { loginInformation, platform } from '~/recoils/user/login-information';
import { loginProcess } from './platform-login-process';

export default function Kakao() {
  const KAKAO_API = useLoaderData()[1];
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInformation);

  return (
    <Wrapper
      token={KAKAO_API}
      onSuccess={(response) => {
        loginProcess({
          OAuthresponse: response.response.access_token,
          platform: platform.KAKAO,
          name: response.profile?.properties.nickname,
          navigate,
          setLoginInfo,
        });
      }}
    >
      <img src='/icons/kakao.svg' alt='kakao' />
      <Text>카카오톡으로 계속하기</Text>
    </Wrapper>
  );
}
const Wrapper = styled(KakaoLogin)`
  align-items: center;
  width: 330px !important;
  height: 72px !important;
  border-radius: 8px !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 8px;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 24px !important;
  cursor: pointer !important;
`;
const Text = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #31302f;
`;
