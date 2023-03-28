import styled from 'styled-components';
import Suspenses from '~/components/common/suspense';
import { Banner } from '~/components/main/banner';
import Radio from '~/components/main/radio';

export default function Main() {
  return (
    <Wrapper>
      <Banner />
      <Radio />
      <Suspenses pageName='Training' />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
  margin-top: -72px;
  padding-top: 72px;
`;
