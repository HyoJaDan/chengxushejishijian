import { ClientOnly } from 'remix-utils';
import styled from 'styled-components';
import Suspenses from '~/components/common/suspense';

export default function Profile() {
  return (
    <Wrapper>
      <Content>
        <Suspenses pageName='UserInformation' />
        <Flex>
          <Suspenses pageName='IntroductionAndLink' />
          <SmallFlex>
            <ClientOnly>{() => <Suspenses pageName='Chart' />}</ClientOnly>
            <Suspenses pageName='Statistics' />
          </SmallFlex>
        </Flex>
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

const Flex = styled.div`
  display: flex;
  gap: 24px;
`;
const SmallFlex = styled(Flex)`
  flex-direction: column;
`;
const Box = styled.div``;
