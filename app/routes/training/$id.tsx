import styled from 'styled-components';
import MyPageHeader from '~/components/common/sub-navigation-bar';
import Suspenses from '~/components/common/suspense';

export default function TrainingFunction() {
  return (
    <div>
      <MyPageHeader page='Training' />
      <Content>
        <Suspenses pageName='Detail' />
      </Content>
    </div>
  );
}
const Content = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
  margin-top: -144px;
  padding-top: 144px;
`;
