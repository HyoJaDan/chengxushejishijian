import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getSolutionListById } from '~/data/solution/get-solutions';
import { decreaseIndex, increaseIndex } from '~/hooks/manage-button-index';
import { LeftButton, RightButton } from '../common/buttons';
import { SolutionBox } from '../solutioin/main-page/solution-box';

export const OtherSolution = ({ id }: { id: number }) => {
  const solutionList = useRecoilValue(
    getSolutionListById(id as unknown as string)
  );
  const [index, setIndex] = useState(0);
  const [isEndIndex, setIsEndIndex] = useState<boolean>(false);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [isStartIndex, setIsStartIndex] = useState<boolean>(true);

  if (solutionList.length > 3) {
    return (
      <Wrapper>
        <Header className='body1_BD'>
          <div>다른 스위머의 풀이</div>
          <>{solutionList.length}개</>
        </Header>
        <Slider>
          <LeftButton
            onClick={() =>
              decreaseIndex(
                index,
                setIndex,
                isMoving,
                setIsMoving,
                solutionList.length,
                setIsStartIndex,
                setIsEndIndex
              )
            }
            startIndex={isStartIndex}
            top={130}
          >
            <FlippedImg src='/icons/problem/right.svg' alt='left' />
          </LeftButton>
          <AnimatePresence
            onExitComplete={() => {
              setIsMoving((prev: boolean) => !prev);
            }}
            initial={false}
          >
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
          <RightButton
            onClick={() =>
              increaseIndex(
                index,
                setIndex,
                isMoving,
                setIsMoving,
                solutionList.length,
                setIsEndIndex,
                setIsStartIndex
              )
            }
            endIndex={isEndIndex}
            top={130}
          >
            <img src='/icons/problem/right.svg' alt='right' />
          </RightButton>
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
const FlippedImg = styled.img`
  transform: scaleX(-1);
`;
