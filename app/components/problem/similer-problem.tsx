import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getProblemsById } from '~/data/problem/get-problems';
import { TrainBox } from '../common/training';

const offset = 3;
export const SimilerTraining = ({ id }: { id: number }) => {
  const problems = useRecoilValue(getProblemsById(id));
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<boolean>(false);
  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    const totalProblems = problems.length;
    const maxIndex = Math.floor(totalProblems / offset) - 1;
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Wrapper>
      <Header className='body1_BD'>유사한 트레이닝 문제</Header>
      <Slider>
        <AnimatePresence onExitComplete={toggleLeaving} initial={false}>
          <Row
            variants={rowVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ type: 'tween', duration: 1 }}
            key={index}
          >
            {problems
              .slice(offset * index, offset * index + offset)
              .map((data, num) => TrainBox(data, num, 1149))}
          </Row>
        </AnimatePresence>
        <Button onClick={() => increaseIndex()} isLeaving={leaving}>
          <img src='/icons/problem/right.svg' alt='right' />
        </Button>
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 142px;
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
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  width: 1149px;
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
  top: 46px;
  right: -10px;
  ${({ isLeaving }) => isLeaving && 'display:none'}
`;
