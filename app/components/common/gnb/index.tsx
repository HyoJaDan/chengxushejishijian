import styled from 'styled-components';
import type { FCChildren } from '~/components/common/types/function-component';

export const GNB: FCChildren = ({ children }) => (
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
