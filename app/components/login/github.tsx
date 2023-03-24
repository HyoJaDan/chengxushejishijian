import { useLoaderData } from '@remix-run/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function GithubLogin() {
  const GithubID = useLoaderData()[2];
  const [currentURL, setCurrentURL] = useState<string>();
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);
  const temp = '7ac9ebbbfe9684ed54a6';
  const loginUri = `https://github.com/login/oauth/authorize?client_id=${temp}&redirect_uri=${currentURL}callback`;

  return (
    <Wrapper href={loginUri}>
      <img src='/icons/login/github.svg' alt='github' />
      github으로 계속하기
    </Wrapper>
  );
}
const Wrapper = styled.a`
  width: 330px;
  height: 72px;
  background: ${(prop) => prop.theme.color.grayScale.gray_100};
  border-radius: 8px;

  color: ${(prop) => prop.theme.color.grayScale.gray_800};
  display: flex;
  flex-direction: row;
  gap: 9.5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
