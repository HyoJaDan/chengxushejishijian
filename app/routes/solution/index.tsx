import styled from 'styled-components';
import Suspenses from '~/components/common/suspense';
import { Banner } from '~/components/main/banner';
import SolutionRadio from '~/components/solutioin/main-page/radio';

export default function Solution() {
  return (
    <Wrapper>
      <Banner />
      <SolutionRadio />
      <Suspenses pageName='Solution' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
  margin-top: -72px;
  padding-top: 72px;
`;
