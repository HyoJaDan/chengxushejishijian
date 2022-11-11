import styled from 'styled-components';
import type { FCClass } from '~/components/common/types/function-component';
import { HotSubmit } from '../hot-submit';
import { HotSwimmers } from '../hot-swimmers';
import { NeedFeedback } from '../need-feedback';
import { RandomAssignments } from '../random-assignment';
import { SwimmerRanking } from '../swimmer-ranking';

export const MainContent: FCClass = ({ className }) => (
  <Wrapper className={className}>
    <HotSubmit />
    <RandomAssignments />
    <NeedFeedback />
    <HotSwimmers />
    <SwimmerRanking />
  </Wrapper>
);

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
