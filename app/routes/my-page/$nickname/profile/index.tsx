import { useRecoilValue } from 'recoil';
import { ClientOnly } from 'remix-utils';
import styled from 'styled-components';
import Chart from '~/components/myPage/profile/chart/chart.client';
import { ProfileFallback } from '~/components/myPage/profile/fallback';
import Statistics from '~/components/myPage/profile/statistics';
import { localUserData } from '~/data/my-page/user-data';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function ProfileDefault() {
  console.log('Hello');
  const userData = useRecoilValue(localUserData);
  console.log(userData);
  return (
    <Wrapper>
      <Content>
        <SSRSafeSuspense /* fallback={ProfileFallback()} */>
          {userData.id !== 0 ? (
            <Flex>
              {/* <IntroductionAndLink /> */}
              <SmallFlex>
                <ClientOnly>{() => <Chart />}</ClientOnly>
                <Statistics />
              </SmallFlex>
            </Flex>
          ) : (
            <ProfileFallback />
          )}
          {/* <Flex> */}
          {/* <IntroductionAndLink /> */}
          {/* <SmallFlex>
              <ClientOnly>{() => <Chart />}</ClientOnly>
              <Statistics />
            </SmallFlex>
          </Flex> */}
        </SSRSafeSuspense>
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
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
