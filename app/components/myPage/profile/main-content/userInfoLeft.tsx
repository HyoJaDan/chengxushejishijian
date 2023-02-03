import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userId } from '~/recoils/user-info/atoms';
import Succeed from './userInfoLeftSucceed';

export default function UserInfoLeft() {
  const Id = useRecoilValue(userId);
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        {Id !== undefined && <Succeed />}
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
