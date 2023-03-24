import { useLoaderData, useNavigate } from '@remix-run/react';
import KakaoLogin from 'react-kakao-login';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { localStorageData } from '~/data/recoils/user/common/login-information';
import { platform } from '~/models/platform';

import { loginProcess } from './platform-login-process';

export default function Kakao() {
  const KAKAO_API = useLoaderData()[1];
  const navigate = useNavigate();
  const setLocalData = useSetRecoilState(localStorageData);

  return (
    <Wrapper
      token={KAKAO_API}
      onSuccess={(response) => {
        loginProcess({
          OAuthresponse: response.response.access_token,
          platform: platform.KAKAO,
          navigate,
          setLocalData,
        });
      }}
    >
      <Img src='/icons/login/kakao.svg' alt='kakao' />
      <Text className='body1_BD'>카카오톡으로 계속하기</Text>
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
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 24px !important;
  cursor: pointer !important;
`;
const Text = styled.div`
  text-align: center;
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const Img = styled.img``;
