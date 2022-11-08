import { Outlet } from "@remix-run/react"
import styled from "styled-components"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '~/hooks/login-scipt/oAuth';

export default function Login() {
  return (
    <Wrapper>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Outlet />
      </GoogleOAuthProvider>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: #E9EAEC;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;