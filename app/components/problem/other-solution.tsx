import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getSolutionListById } from '~/data/solution/get-solutions';
import { SolutionBox } from '../solutioin/main-page/solution-box';

const offset = 3;
export const OtherSolution = ({ id }: { id: number }) => {
  const solutionList = useRecoilValue(
    getSolutionListById(id as unknown as string)
  );
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<boolean>(false);
  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    const totalSolutions = solutionList.length;
    const maxIndex = Math.floor(totalSolutions / offset) - 1;
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  if (solutionList.length !== 0)
    return (
      <Wrapper>
        <Header className='body1_BD'>다른 스위머의 풀이</Header>
        <Slider>
          {/* <AnimatePresence onExitComplete={toggleLeaving} initial={false}>
          <Row
            variants={rowVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ type: 'tween', duration: 1 }}
            key={index}
          >
            {solutionList
              .slice(offset * index, offset * index + offset)
              .map((data, num) => SolutionBox(data, num, 1149))}
          </Row>
        </AnimatePresence>
        <Button onClick={() => increaseIndex()} isLeaving={leaving}>
          <img src='/icons/problem/right.svg' alt='right' />
        </Button> */}
          <Contents>
            {solutionList.map((data, num) => SolutionBox(data, num, 1149))}
          </Contents>
        </Slider>
      </Wrapper>
    );
  return null;
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* margin-bottom: 309px; */
`;
const Header = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
const Slider = styled.div`
  position: relative;
`;
const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
`;
const rowVariants = {
  hidden: {
    x: 1256 + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: 0,
  },
};
const Button = styled.div<{ isLeaving: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 8px;
  background-color: ${(props) => props.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 100px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: absolute;
  top: 130px;
  right: -22px;
  ${({ isLeaving }) => isLeaving && 'display:none'}
`;
const Contents = styled.div`
  display: -webkit-box;
  -webkit-box-align: center;
  gap: 24px;
  overflow-x: scroll;
`;
