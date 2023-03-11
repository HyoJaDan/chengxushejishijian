import { ClientOnly } from 'remix-utils';
import styled from 'styled-components';
import Suspenses from '~/components/common/suspense';
import Calender from '~/components/myPage/profile/calender';
import Chart from '~/components/myPage/profile/chart/chart.client';

export default function Profile() {
  return (
    <Wrapper>
      <Content>
        <Suspenses pageName='UserInformation' />
        <Div>
          <Suspenses pageName='IntroductionAndLink' />
          <div>
            <SubContainer>
              <ClientOnly>{() => <Chart />}</ClientOnly>
            </SubContainer>
            <Calender />
          </div>
        </Div>
      </Content>
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
  width: 1256px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

const DefaultContainer = styled.div`
  border: 1px solid #efedea;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
`;

const Div = styled.div`
  display: flex;

  gap: 24px;
`;
const SubContainer = styled(DefaultContainer)`
  height: 234px;
  width: 296px;
`;
