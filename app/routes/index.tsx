import styled from 'styled-components';
import MyPageHeader from '~/components/common/\bsub-navigation-bar';
import Radio from '~/components/main/radio';
import Suspenses from '~/components/main/suspense';

export default function Index() {
  return (
    <Wrapper>
      <MyPageHeader page='Training' />
      <Content>
        <Radio />
        <Suspenses />
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Content = styled.div`
  background-color: #f8f6f4;
  min-height: 100vh;
  margin-top: -112px;
  padding-top: 144px;
`;
