import styled from 'styled-components';
import Suspenses from '~/components/common/suspense';
import { Banner } from '~/components/main/banner';
import Radios from '~/components/main/radio';

export default function Solution() {
  return (
    <Wrapper>
      <Banner />
      <Radios />
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
