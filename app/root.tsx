import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
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
import styled, { ThemeProvider } from 'styled-components';
import globalStyle from '~/styles/global.css';
import stylesUrl from '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { GlobalNavigationBar } from './components/global-navigation-bar';
import { LoginWrapper } from './components/login-common-used/login-wrapper';
import { theme } from './styles/theme';

export const loader: LoaderFunction = async () => {
  return [
    process.env.GOOGLE_CLIENT_ID,
    process.env.KAKAO_JS_API,
    process.env.GITHUB_CLIENT_ID,
    process.env.GITHUB_CLIENT_SECRET,
  ];
};
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStyle },
  { rel: 'stylesheet', href: stylesUrl },
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
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
          </body>
        </html>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-y: scroll;
`;

export const ContentArea = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  margin: -72px 0 0 0;
  padding: 72px 0 0 0;
`;
