import type { FC, HTMLProps } from 'react';
import styled from 'styled-components';

export const Banner: FC<HTMLProps<HTMLElement>> = ({ className }) => (
  <Wrapper>
    <Img
      className={className}
      src='/icons/banner-area.png'
      alt='메인 페이지 배너 영역'
    />
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 1256px;
  margin: 40px auto 80px auto;
`;
const Img = styled.img`
  width: 100%;
  position: relative;
`;
