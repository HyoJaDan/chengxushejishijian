import type { FC } from 'react';
import styled from 'styled-components';
import { Login } from './login';

export const TrailingButtons: FC = () => {
  return (
    <Wrapper>
      {/*  <IconLink to='/'>
        <Icon src='/icons/notification.svg' />
      </IconLink> */}
      <Login />
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

/* const IconLink = styled(Link)`
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
 */
