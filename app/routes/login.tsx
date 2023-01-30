import { GoogleOAuthProvider } from '@react-oauth/google';
import type { LoaderFunction } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  return process.env.GOOGLE_CLIENT_ID;
};

export default function Login() {
  const GOOGLE_CLIENT_ID = useLoaderData();

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Outlet />
    </GoogleOAuthProvider>
  );
}
