import styled from 'styled-components';

export default function GithubLogin() {
  const GithubID = /*  useLoaderData()[2]; */ '4eda15a08f26b80b6112';

  const loginUri = `https://github.com/login/oauth/authorize?client_id=${GithubID}&redirect_uri=http://localhost:3000/callback`;

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
