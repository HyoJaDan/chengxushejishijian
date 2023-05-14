import type { FC } from 'react';
import styled from 'styled-components';
import { Login } from './login';

export const TrailingButtons: FC = () => {
  return (
    <Wrapper>
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
