import styled from 'styled-components';
import type { FCClass } from '~/components/common/types/function-component';
import { MainPageTheme } from '~/constants/theme';

export const MainContent: FCClass = ({ className }) => (
  <Wrapper className={className}>Main Content</Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  background-color: red;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${MainPageTheme.gridGap};
`;
