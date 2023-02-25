import { ClientOnly } from 'remix-utils';
import styled from 'styled-components';
import Calender from '~/components/myPage/profile/calender';
import Chart from '~/components/myPage/profile/chart/chart.client';
import UserInfoLeft from '~/components/myPage/profile/main-content/userInfoLeft';
import UserInfoRight from '~/components/myPage/profile/main-content/userInfoRight';

export default function Profile() {
  return (
    <Wrapper>
      <Content>
        <MainContainer>
          <UserInfoLeft />
          <UserInfoRight />
        </MainContainer>
        <Div>
          <SubContainer>
            <ClientOnly>{() => <Chart />}</ClientOnly>
          </SubContainer>
          <Calender />
        </Div>
      </Content>
      <Footer>
        <FooterContainer />
        <FooterContainer />
        <FooterContainer />
        <FooterContainer />
      </Footer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #f8f6f4;
  min-height: 100vh;
  margin-top: -112px;
  padding-top: 144px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 24px;
  margin: 88px 0 178px 0;
`;
const DefaultContainer = styled.div`
  border: 1px solid #efedea;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
`;
const MainContainer = styled(DefaultContainer)`
  width: 936px;
  height: 496px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const SubContainer = styled(DefaultContainer)`
  height: 234px;
  width: 296px;
`;
const FooterContainer = styled(DefaultContainer)`
  width: 296px;
  height: 200px;
`;
