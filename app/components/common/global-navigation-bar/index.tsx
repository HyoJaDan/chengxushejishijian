import styled from 'styled-components';
import type { FCChildren } from '~/components/common/types/function-component';
import { Link } from '@remix-run/react';

export const GlobalNavigationBar: FCChildren = ({ children }) => (
  <>
    <Wrapper>
      GNB 영역 입니다.
      <div role='button'>과제</div>
      <div role='button'>커뮤니티</div>
      {/* <Link to="login">로그인하기</Link> */}
    </Wrapper>
    {children}
  </>
);

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
`;
