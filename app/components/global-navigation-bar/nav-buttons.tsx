import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { FCClass } from '../../models/function-component';

export const NavButtons: FCClass = ({ className }) => {
  const [isProblem, setIsProblem] = useState<boolean>(false);
  const [isSolution, setIsSolution] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const [, , , temp] = window.location.href.split('/');
    if (temp === 'solution') {
      setIsProblem(false);
      setIsSolution(true);
    } else if (temp === 'my-page') {
      setIsProblem(false);
      setIsSolution(false);
    } else {
      setIsProblem(true);
      setIsSolution(false);
    }
  });

  return (
    <Wrapper className='body1_BD'>
      <Links to='/'>Grow-With</Links>
      <LinkToProblem isproblem={isProblem ? 1 : 0} to='/'>
        问题
      </LinkToProblem>
      <LinkToSolution issolution={isSolution ? 1 : 0} to='/solution'>
        解答
      </LinkToSolution>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
  color: ${(prop) => prop.theme.color.basic.white};
`;
const Links = styled(Link)`
  color: #31302f;
`;
const LinkToProblem = styled(Link)<{ isproblem: boolean }>`
  color: #a4a2a0;
  /* #31302f */

  ${({ isproblem }) => isproblem && 'color:#31302f'}
`;
const LinkToSolution = styled(Link)<{ issolution: boolean }>`
  color: #a4a2a0;
  ${({ issolution }) => issolution && `color:#31302F`}
`;
