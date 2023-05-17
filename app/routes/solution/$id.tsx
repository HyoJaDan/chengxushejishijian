import styled from 'styled-components';
import { SolutionMain } from '~/components/solutioin/solution-detail';
import { SolutionFallBack } from '~/components/solutioin/solution-detail/soiution-fallback';
import SSRSafeSuspense from '../../hooks/ssr-safe-suspense';

export default function SolutionDefault() {
  return (
    <Wrapper>
      <SSRSafeSuspense fallback={SolutionFallBack()}>
        <SolutionMain />
      </SSRSafeSuspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh; */
`;
