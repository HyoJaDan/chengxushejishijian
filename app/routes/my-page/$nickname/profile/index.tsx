import { useRecoilValue } from 'recoil';
import { ClientOnly } from 'remix-utils';
import styled from 'styled-components';
import Chart from '~/components/myPage/profile/chart/chart.client';
import { ProfileFallback } from '~/components/myPage/profile/fallback';
import IntroductionAndLink from '~/components/myPage/profile/main-content/introductionAndLink';
import Statistics from '~/components/myPage/profile/statistics';
import { localUserData } from '~/data/my-page/user-data';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function ProfileDefault() {
  const userData = useRecoilValue(localUserData);
  return (
    <Wrapper>
      <Content>
        <SSRSafeSuspense>
          {userData.id !== 0 ? (
            <Flex>
              <IntroductionAndLink />
              <SmallFlex>
                <ClientOnly>{() => <Chart />}</ClientOnly>
                <Statistics />
              </SmallFlex>
            </Flex>
          ) : (
            <ProfileFallback />
          )}
        </SSRSafeSuspense>
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
`;
const Content = styled.div`
  width: 1256px;
  margin: 24px auto;
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
