import styled from 'styled-components';
import { Banner } from '~/components/main/banner';
import Radios from '~/components/main/radio';

export default function Solution() {
  return (
    <Wrapper>
      <Banner />
      <Radios />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  min-height: 100vh;
  margin-top: -72px;
  padding-top: 72px;
`;
