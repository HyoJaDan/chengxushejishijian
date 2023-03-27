import styled from 'styled-components';
import { TrainingMain } from '~/components/training';
import { TrainingFallback } from '~/components/training/training-fallback';
import SSRSafeSuspense from '../../hooks/ssr-safe-suspense';

export default function TrainingDefault() {
  return (
    <Wrapper>
      <SSRSafeSuspense fallback={TrainingFallback()}>
        <TrainingMain />
      </SSRSafeSuspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
  margin-top: -82px;
  padding-top: 82px;
`;
