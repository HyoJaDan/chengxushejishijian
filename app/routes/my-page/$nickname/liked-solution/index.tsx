import styled from 'styled-components';
import LikedSolution from '~/components/myPage/liked-solution';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function LikedSolutionDefualt() {
  return (
    <Wrapper>
      <SSRSafeSuspense>
        <LikedSolution />
      </SSRSafeSuspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  display: flex;
  justify-content: center;
`;
