import { Link } from '@remix-run/react';
import styled from 'styled-components';
import type { FCClass } from '~/components/common/types/function-component';
import { NavButtons } from './nav-buttons';
import { TrailingButtons } from './trailing-buttons';

export const GlobalNavigationBar: FCClass = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Temp>
        <Div>
          <Link to='/'>
            <Logo src='/icons/thePool.svg' alt='thePool' />
          </Link>
          <NavButtons />
        </Div>
        <TrailingButtons />
      </Temp>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  height: 72px;
  width: 100%;
  background-color: #ffffff;
  color: black;
  z-index: 1;
  border-bottom: 1px solid #efedea;
`;
const Temp = styled.div`
  width: min(100%, 1400px);
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  gap: 32px;
  margin: 0 auto;
`;
const Div = styled.div`
  display: flex;
  gap: 36px;
`;
const Logo = styled.img.attrs({
  role: 'button',
})`
  width: 48px;
  height: 30px;
`;
