import styled from 'styled-components';

export default function Archive() {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #f8f6f4;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 1256px;
  height: 1289px;
  margin: 40px 0 40px 0;
  background: #ffffff;
`;
