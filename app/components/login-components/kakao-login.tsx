import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import { KAKAO_JS_API } from '~/constants/oAuth';
import { useNavigate } from '@remix-run/react';
import { useSetRecoilState } from 'recoil';
import { loginInformation, platform } from '~/recoils/user-info/atoms';

export default function Kakao() {
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInformation);
  return (
    <Wrapper
      token={KAKAO_JS_API}
      onSuccess={(response) => {
        setLoginInfo({
          isloggedin: true,
          platform: platform.KAKAO,
          name: response.profile?.properties.nickname,
        });
        navigate('/login/detail');
      }}
      onFail={(error) => console.log(error)}
    >
      <ContinueWithKakao>카카오톡으로 계속하기</ContinueWithKakao>
    </Wrapper>
  );
}
const Wrapper = styled(KakaoLogin)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContinueWithKakao = styled.div`
  width: 463px;
  height: 80px;
  background-color: #ffe459;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
`;
