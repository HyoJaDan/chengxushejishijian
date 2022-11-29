import styled from 'styled-components';
import Part2 from '~/components/myPage/profile/part2';
import Part3 from '~/components/myPage/profile/part3';

export default function Profile() {
  return (
    <Wrapper>
      <Container />
      <Part2 />
      <Part3 />
      <Div>
        <Container4 />
        <Container4 />
        <Container4 />
      </Div>
    </Wrapper>
  );
}
export const Wrapper = styled.div`
  flex-grow: 2.2;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Container = styled.div`
  width: 936px;
  height: 80px;
  background: #ffffff;
  border-radius: 8px;
`;
const Div = styled.div`
  display: flex;
  gap: 24px;
`;
const Container4 = styled(Container)`
  height: 224px;
  width: 296px;
`;
