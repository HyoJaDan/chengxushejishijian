import { GoogleOAuthProvider } from '@react-oauth/google';
import { useLoaderData } from '@remix-run/react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import GoogleLogin from '~/components/login/google';
import KakaoLogin from '~/components/login/kakao';
import { loginStatus } from '~/data/user/common/login-information';
import GithubLogin from '../login/github';

function Header() {
  return (
    <Font>
      <div className='title1_BD'>THE POOL에 입장하기</div>
      <Ipsu className='title4_BD'>입수할 준비 되셨나요?</Ipsu>
      <div className='body1_MD'>
        같은 분야의 주니어들과 함께 집단지성에 기대보아요.
      </div>
    </Font>
  );
}
export default function LoginComponent() {
  const GOOGLE_CLIENT_ID = useLoaderData()[0];
  const setStatus = useSetRecoilState(loginStatus);

  return (
    <Wrapper>
      <X
        src='/icons/login/X.svg'
        alt='X'
        onClick={() => setStatus('unChecked')}
      />
      <Img src='/icons/login/bording.svg' alt='bording' />
      <Header />
      <Login className='body1_BD'>
        <GithubLogin />
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <GoogleLogin />
        </GoogleOAuthProvider>
        <KakaoLogin />
      </Login>
    </Wrapper>
  );
}

const X = styled.img`
  position: absolute;
  top: 32.33px;
  right: 32.33px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  padding-bottom: 64px;
  color: ${(prop) => prop.theme.color.basic.black};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Img = styled.img`
  margin-top: 64px;
`;
const Font = styled.div`
  line-height: 120%;
  text-align: center;
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;

const Ipsu = styled.div`
  margin: 24px 0 8px 0;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
