import { Link } from '@remix-run/react';
import type { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  loginInformation,
  loginStatus,
} from '~/recoils/user/common/login-information';
import { Login } from './login';

type TrailingButtonMenu = {
  src: string;
  to: string;
};

const menu: TrailingButtonMenu[] = [
  {
    to: '/',
    src: '/icons/notification.svg',
  },
];

export const TrailingButtons: FC = () => {
  const loginInfo = useRecoilValue(loginInformation);
  const setStatus = useSetRecoilState(loginStatus);
  const menuButtons = menu.map(({ src, to }) => {
    return (
      <IconLink to={to} key={`menu-icon-buttons-${src}`}>
        <Icon src={src} />
      </IconLink>
    );
  });
  return (
    <Wrapper>
      {menuButtons}
      <Login loginInformation={loginInfo} setLogin={setStatus} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const IconLink = styled(Link)`
  display: block;
`;

const Icon = styled.img.attrs({
  role: 'button',
})`
  display: block;
  width: 24px;
  height: 24px;
  color: #c2c0bd;
`;
