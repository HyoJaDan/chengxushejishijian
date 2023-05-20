import styled from 'styled-components';
import BookmarkedProblem from '~/components/myPage/archive';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function BookmarkedProblemDefault() {
  return (
    <Wrapper>
      <SSRSafeSuspense>
        <BookmarkedProblem />
      </SSRSafeSuspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  display: flex;
  justify-content: center;
`;
