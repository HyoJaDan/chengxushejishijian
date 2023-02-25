/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
import styled from 'styled-components';
import Content from './content';
import Header from './header';

const QnaContent = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
};
export default QnaContent;
const Wrapper = styled.div`
  grid-column: 2/-1;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: min(100%, 1200px);
  margin: 0 auto;
`;
