import styled from 'styled-components';

export default function Profile() {
  return (
    <Wrapper>
      <Container />
      <Container2 />
      <Container3 />
      <Container4 />
    </Wrapper>
  );
}
const Wrapper = styled.div`
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
const Container2 = styled(Container)`
  height: 264px;
`;
const Container3 = styled(Container)`
  height: 893px;
`;
const Container4 = styled(Container)`
  height: 264px;
`;
