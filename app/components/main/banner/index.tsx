import type { FC, HTMLProps } from 'react';
import styled from 'styled-components';

export const Banner: FC<HTMLProps<HTMLElement>> = ({ className }) => (
  <Wrapper
    className={className}
    src='/banner-area.png'
    alt='메인 페이지 배너 영역'
  />
);

const Wrapper = styled.img`
  position: relative;
`;
