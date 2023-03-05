import { Suspense } from 'react';
import styled from 'styled-components';
import Succeed from './userInfoLeftSucceed';

const IsStatusTrue = () => {
  return <Succeed />;
};

export default function UserInfoLeft() {
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <IsStatusTrue />
      </Suspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  border-right: 1px solid #efedea;
`;
