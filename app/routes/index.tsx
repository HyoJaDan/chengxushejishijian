import styled from 'styled-components';
import MyPageHeader from '~/components/common/\bsub-navigation-bar';
import Suspenses from '~/components/common/suspense';
import Radio from '~/components/main/radio';

export default function Index() {
  return (
    <Wrapper>
      <MyPageHeader page='Training' />
      <Content>
        <Radio />
        <Suspenses pageName='Training' />
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Content = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
  margin-top: -144px;
  padding-top: 168px;
`;
