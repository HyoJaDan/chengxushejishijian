import styled from 'styled-components';
import MyPageHeader from '~/components/common/\bsub-navigation-bar';
import Suspenses from '~/components/common/suspense';

export default function Tempfun() {
  return (
    <Fuck>
      <MyPageHeader page='Training' />
      <Content>
        <Suspenses pageName='Detail' />
      </Content>
    </Fuck>
  );
}
const Content = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
  margin-top: -144px;
  padding-top: 144px;
`;
const Fuck = styled.div``;
