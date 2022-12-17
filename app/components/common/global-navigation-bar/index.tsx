import { Link } from '@remix-run/react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import type { FCClass } from '~/components/common/types/function-component';
import { loginInformation } from '~/recoils/user-info/atoms';
import { NavButtons } from './nav-buttons';
import { TrailingButtons } from './trailing-buttons';

export const GlobalNavigationBar: FCClass = ({ className }) => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginInformation);
  useEffect(() => {
    if (localStorage.getItem('thePoolAccessToken')) {
      setLoginInfo({
        ...loginInfo,
        isloggedin: true,
        name: '전성호',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper className={className}>
      <Link to='/'>
        <Logo src='/the-pool-logo.svg' />
      </Link>
      <NavButtons />
      <Spacer />
      <TrailingButtons />
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  top: 0;
  height: 56px;
  width: 100%;
  background-color: #2478f6;
  padding: 0 24px;
  gap: 32px;
  z-index: 1;
`;

const Logo = styled.img.attrs({
  role: 'button',
})`
  width: 80px;
  height: 26px;
`;

const Spacer = styled.div`
  flex: 1;
`;
