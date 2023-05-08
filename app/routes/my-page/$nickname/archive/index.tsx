import styled from 'styled-components';
import MypageArchive from '~/components/myPage/archive';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function Archive() {
  return (
    <Wrapper>
      <SSRSafeSuspense>
        <MypageArchive />
      </SSRSafeSuspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
