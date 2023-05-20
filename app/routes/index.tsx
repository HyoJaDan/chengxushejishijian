import styled from 'styled-components';
import { Training } from '~/components/main';
import { Banner } from '~/components/main/banner';
import { ProblemFallback } from '~/components/main/proble-fallback';
import ProblemRadio from '~/components/main/radio';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function Main() {
  return (
    <Wrapper>
      <Banner />
      <ProblemRadio />
      <SSRSafeSuspense fallback={<ProblemFallback />}>
        <Training />
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
