import styled from 'styled-components';
import SubmittedSolution from '~/components/myPage/submitted-solution';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function SubmittedSolutionDefault() {
  return (
    <Wrapper>
      <SSRSafeSuspense>
        <SubmittedSolution />
      </SSRSafeSuspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  display: flex;
  justify-content: center;
`;
