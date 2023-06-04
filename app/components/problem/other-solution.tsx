import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getSolutionListById } from '~/data/solution/get-solutions';
import { increaseIndex } from '~/hooks/increase-index';
import { Button } from '../common/right-button';
import { SolutionBox } from '../solutioin/main-page/solution-box';

export const OtherSolution = ({ id }: { id: number }) => {
  const solutionList = useRecoilValue(
    getSolutionListById(id as unknown as string)
  );
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<boolean>(false);
  const [endIndex, setEndIndex] = useState<boolean>(false);
  console.log(index);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  if (solutionList.length > 3) {
    return (
      <Wrapper>
        <Header className='body1_BD'>
          <div>다른 스위머의 풀이</div>
          <>{solutionList.length}개</>
        </Header>
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
              {solutionList
                .slice(index, index + 3)
                .map((data, num) => SolutionBox(data, num, 1149))}
            </Row>
          </AnimatePresence>
          <Button
            onClick={() =>
              increaseIndex(
                index,
                setIndex,
                leaving,
                setLeaving,
                solutionList.length,
                setEndIndex
              )
            }
            endIndex={endIndex}
            top={130}
          >
            <img src='/icons/problem/right.svg' alt='right' />
          </Button>
        </Slider>
      </Wrapper>
    );
  }
  if (solutionList.length !== 0)
    return (
      <Wrapper>
        <Header className='body1_BD'>다른 스위머의 풀이</Header>
        <Slider>
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
  margin-bottom: 309px;
`;
const Header = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
  display: flex;
  gap: 8px;
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

const Contents = styled.div`
  display: -webkit-box;
  -webkit-box-align: center;
  gap: 24px;
  overflow-x: scroll;
`;
