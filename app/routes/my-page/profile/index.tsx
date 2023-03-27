import { ClientOnly } from 'remix-utils';
import styled from 'styled-components';
import Chart from '~/components/myPage/profile/chart/chart.client';
import { ProfileFallback } from '~/components/myPage/profile/fallback';
import IntroductionAndLink from '~/components/myPage/profile/main-content/introductionAndLink';
import UserInformation from '~/components/myPage/profile/main-content/UserInformation';
import Statistics from '~/components/myPage/profile/statistics';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function ProfileDefault() {
  return (
    <Wrapper>
      <Content>
        <SSRSafeSuspense fallback={ProfileFallback()}>
          <UserInformation />
          <Flex>
            <IntroductionAndLink />
            <SmallFlex>
              <ClientOnly>{() => <Chart />}</ClientOnly>
              <Statistics />
            </SmallFlex>
          </Flex>
        </SSRSafeSuspense>
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
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

const Flex = styled.div`
  display: flex;
  gap: 24px;
`;
const SmallFlex = styled(Flex)`
  flex-direction: column;
`;
