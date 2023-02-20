import styled from 'styled-components';
import { Navigaion } from '~/components/qna/navigation-bar';
import QnaContent from '~/components/qna/newQnA';
import PopularQnA from '~/components/qna/popularQnA';

const QnA = () => {
  /* useIdentifyLogin(); */
  return (
    <Wrappar>
      <Navigaion />
      <Main>
        <PopularQnA />
        <QnaContent />
      </Main>
    </Wrappar>
  );
};
const Wrappar = styled.div`
  min-height: 100vh;
  margin: -56px 0 0 0;
  padding: 56px 0 0 0;
  background: #e5e5e5;
`;

const Main = styled.div`
  min-height: 100vh;
  margin: -118px auto 0 auto;
  padding: 118px 0 0 0;
`;
export default QnA;
