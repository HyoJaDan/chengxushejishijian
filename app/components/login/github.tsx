import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function GithubLogin() {
  const GithubID = /*  useLoaderData()[2]; */ '7ac9ebbbfe9684ed54a6';

  const [currentURL, setCurrentURL] = useState<string>();
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  const loginUri = `https://github.com/login/oauth/authorize?client_id=${GithubID}&redirect_uri=${currentURL}callback`;

  return (
    <Wrapper href={loginUri}>
      <img src='/icons/github.svg' alt='github' />
      github으로 계속하기
    </Wrapper>
  );
}
const Wrapper = styled.a`
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
