import styled from 'styled-components';
import MypageArchive from '~/components/myPage/archive';

export default function Archive() {
  return (
    <Wrapper>
      <MypageArchive />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #f8f6f4;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  margin-top: -112px;
  padding-top: 144px;
`;
