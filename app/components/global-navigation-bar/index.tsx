import styled from 'styled-components';
import type { FCClass } from '~/models/function-component';
import { NavButtons } from './nav-buttons';

export const GlobalNavigationBar: FCClass = ({ className }) => {
  return (
    <Wrapper className={className}>
      <FlexWrapper>
        <FlexTie>
          <NavButtons />
        </FlexTie>
      </FlexWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  height: 72px;
  width: 100%;
  background-color: ${(prop) => prop.theme.color.basic.white};

  color: ${(prop) => prop.theme.color.basic.black};
  z-index: 2;
  border-bottom: 1px solid #efedea;
`;

const FlexWrapper = styled.div`
  width: min(100%, 1256px);
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin: 0 auto;
`;
const FlexTie = styled.div`
  display: flex;
  gap: 32px;
`;
const Links = styled.div`
  display: flex;
  gap: 16px;
`;
const Logo = styled.img.attrs({
  role: 'button',
})``;
