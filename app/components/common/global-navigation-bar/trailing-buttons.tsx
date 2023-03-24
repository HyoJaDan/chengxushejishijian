import { Link } from '@remix-run/react';
import type { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  localStorageData,
  loginStatus,
} from '~/data/recoils/user/common/login-information';
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
  const data = useRecoilValue(localStorageData);
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
      <Login localStorageData={data} setLogin={setStatus} />
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
