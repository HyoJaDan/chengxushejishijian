import styled from 'styled-components';
import MyPageHeader from '~/components/common/\bsub-navigation-bar';

export default function Solution() {
  return (
    <Wrapper>
      <MyPageHeader page='Training' />
      <Temp />
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Temp = styled.div`
  background-color: #f8f6f4;
  min-height: 100vh;
  margin-top: -112px;
  padding-top: 144px;
`;
