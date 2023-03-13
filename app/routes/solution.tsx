import styled from 'styled-components';

export default function Solution() {
  return (
    <Wrapper>
      <Temp />
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Temp = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
  margin-top: -112px;
  padding-top: 144px;
`;
