import type { FC, HTMLProps } from 'react';
import styled from 'styled-components';

export const Banner: FC<HTMLProps<HTMLElement>> = ({ className }) => (
  <Wrapper className={className} src='/banner-area.png' />
);

const Wrapper = styled.img`
  position: relative;
`;
