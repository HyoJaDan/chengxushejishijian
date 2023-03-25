import { Outlet } from '@remix-run/react';
import styled from 'styled-components';
import MyPageHeader from '~/components/common/sub-navigation-bar';

export default function DefaultMyPage() {
  return (
    <Wrapper>
      <MyPageHeader page='Mypage' />
      <Outlet />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
