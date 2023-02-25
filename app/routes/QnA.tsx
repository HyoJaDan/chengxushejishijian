import styled from 'styled-components';
import { useIdentifyLogin } from '~/hooks/userStatus/identify-login';

const QnA = () => {
  useIdentifyLogin();
  return (
    <Wrappar>
      <NavigationBar>NavigationBar</NavigationBar>
      <Main>
        <PopulerQnA>PopulerQnA</PopulerQnA>
        <Content>content</Content>
      </Main>
    </Wrappar>
  );
};
const Wrappar = styled.div`
  min-height: 100vh;
  margin: -56px 0 0 0;
  padding: 56px 0 0 0;
`;
const NavigationBar = styled.div`
  position: sticky;
  padding: 17px 10px;
  top: 56px;
  z-index: 1;

  width: 1600px;
  height: 62px;
  background: #ffffff;
`;
const Main = styled.div`
  min-height: 100vh;
  margin: -118px 0 0 0;
  padding: 118px 0 0 0;
  background: #f8f6f4;
`;
const PopulerQnA = styled.div`
  width: 1600px;
  height: 282px;
  background: #efedea;
`;
const Content = styled.div``;
export default QnA;
