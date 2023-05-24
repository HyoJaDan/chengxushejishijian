import styled from 'styled-components';
import { SolutionTraining } from '~/components/solutioin/editor';
import { SolutionTrainingFallback } from '~/components/solutioin/editor/fallback';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function SolutionTrainingDefault() {
  return (
    <Wrapper>
      <SSRSafeSuspense fallback={SolutionTrainingFallback()}>
        <SolutionTraining />
      </SSRSafeSuspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
  margin-top: -72px;
  padding-top: 72px;
`;
