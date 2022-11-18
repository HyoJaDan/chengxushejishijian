<<<<<<< HEAD
=======
import { Outlet } from '@remix-run/react';
import styled from 'styled-components';
>>>>>>> 44cbbcd (minimized number of rendering)
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Outlet } from '@remix-run/react';
import styled from 'styled-components';
import { GOOGLE_CLIENT_ID } from '~/constants/oAuth';

export default function Login() {
  return (
    <Wrapper>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Outlet />
      </GoogleOAuthProvider>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #e9eaec;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
