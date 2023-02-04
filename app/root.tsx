import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

import globalStyle from '~/styles/global.css';
import { GlobalNavigationBar } from './components/common/global-navigation-bar';
import LoginWrapper from './components/login-wrapper';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStyle },
  {
    rel: 'preload',
    href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css',
    as: 'style',
  },
];

const queryClient = new QueryClient();

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <html lang='en'>
          <head>
            <Meta />
            <Links />
            {typeof document === 'undefined' ? '__STYLES__' : null}
          </head>
          <body>
            <Wrapper>
              <GlobalNavigationBar />
              <ContentArea>
                <Outlet />
                <LoginWrapper />
              </ContentArea>
            </Wrapper>
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </body>
        </html>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentArea = styled.div`
  position: relative;
  min-height: 100vh;
  margin: -56px 0 0 0;
  padding: 56px 0 0 0;
`;
