import type { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export const GNB: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Wrapper>
      GNB 영역 입니다.
      <div role='button'>과제</div>
      <div role='button'>커뮤니티</div>
    </Wrapper>
    {children}
  </>
);

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
`;
