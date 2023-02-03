import { GoogleOAuthProvider } from '@react-oauth/google';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import styled from 'styled-components';
import GoogleLogin from '~/components/login-components/google-login';
import KakaoLogin from '~/components/login-components/kakao-login';

export const loader: LoaderFunction = async () => {
  return process.env.GOOGLE_CLIENT_ID;
};

function Header() {
  return (
    <Font>
      <Insert>THE POOL에 입장하기</Insert>
      <Ipsu>입수할 준비 되셨나요?</Ipsu>
      <Go>같은 분야의 주니어들과 함께 집단지성에 기대보아요.</Go>
    </Font>
  );
}
export default function LoginIndex() {
  const GOOGLE_CLIENT_ID = useLoaderData();
  return (
    <Wrap>
      <Wrapper>
        <Img src='/icons/bording.svg' alt='bording' />
        <Header />
        <Login>
          <Github>
            <img src='/icons/github.svg' alt='github' />
            github으로 계속하기
          </Github>
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <GoogleLogin />
          </GoogleOAuthProvider>
          <KakaoLogin />
        </Login>
      </Wrapper>
    </Wrap>
  );
}
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: -56px;
  padding-top: 56px;
  background-color: #e9eaec;
`;
const Wrapper = styled.div`
  width: 616px;
  height: 654px;
  padding-bottom: 64px;
  background: #ffffff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'Pretendard';
  font-style: normal;
  color: #000000;
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
  font-style: normal;
  line-height: 120%;
  text-align: center;
  color: #31302f;
`;

const Insert = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

const Ipsu = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 132%;
  margin: 24px 0 8px 0;
`;
const Go = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 20px;
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
`;
const Github = styled.div`
  width: 330px;
  height: 72px;
  background: #f8f6f4;
  border-radius: 8px;

  color: #484746;
  display: flex;
  flex-direction: row;
  gap: 9.5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
