import styled from 'styled-components';
import { ProblemFallback } from '~/components/problem/problem-fallback';
import { SolutionMain } from '~/components/solutioin/solution-detail';
import SSRSafeSuspense from '../../hooks/ssr-safe-suspense';

export default function SolutionDefault() {
  return (
    <Wrapper>
      <SSRSafeSuspense fallback={ProblemFallback()}>
        <SolutionMain />
      </SSRSafeSuspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
`;
