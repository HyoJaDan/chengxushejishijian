import { Link } from '@remix-run/react';
import type { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  localStorageData,
  loginStatus,
} from '~/data/user/common/login-information';
import { Login } from './login';

export const TrailingButtons: FC = () => {
  const data = useRecoilValue(localStorageData);
  const setStatus = useSetRecoilState(loginStatus);

  return (
    <Wrapper>
      <IconLink to='/'>
        <Icon src='/icons/notification.svg' />
      </IconLink>
      <Login localStorageData={data} setLogin={setStatus} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  position: relative;
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
