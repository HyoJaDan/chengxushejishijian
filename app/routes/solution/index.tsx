import styled from 'styled-components';
import { Banner } from '~/components/main/banner';
import { SolutionFallback } from '~/components/main/solution-fallback';
import { Solution } from '~/components/main/solutions';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function SolutionDefault() {
  return (
    <Wrapper>
      <Banner />
      <SSRSafeSuspense fallback={<SolutionFallback />}>
        <Solution />
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
