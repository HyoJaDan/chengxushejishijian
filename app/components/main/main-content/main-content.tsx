import styled from 'styled-components';
import type { FCClass } from '~/components/common/types/function-component';
import { HotSubmit } from '../hot-submit';
import { RandomAssignments } from '../random-assignment';

export const MainContent: FCClass = ({ className }) => (
  <Wrapper className={className}>
    <HotSubmit />
    <RandomAssignments />
  </Wrapper>
);

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
