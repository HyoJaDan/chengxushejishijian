import styled from 'styled-components';
import { ProblemMain } from '~/components/problem';
import { ProblemFallback } from '~/components/problem/problem-fallback';
import SSRSafeSuspense from '../../hooks/ssr-safe-suspense';

export default function TrainingDefault() {
  return (
    <Wrapper>
      <SSRSafeSuspense fallback={ProblemFallback()}>
        <ProblemMain />
      </SSRSafeSuspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
`;
