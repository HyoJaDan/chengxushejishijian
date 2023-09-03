import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import { decreaseIndex, increaseIndex } from '~/hooks/manage-button-index';
import type { ISolutions } from '~/models/solutions';
import { LeftButton, RightButton } from '../common/buttons';
import { SolutionBox } from '../solutioin/main-page/solution-box';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
export const OtherSolution = ({
  solutionList,
}: {
  solutionList: ISolutions[];
}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isEndIndex, setIsEndIndex] = useState<boolean>(false);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [isStartIndex, setIsStartIndex] = useState<boolean>(true);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  if (solutionList.length > 3) {
    return (
      <SliderWrapper>
        <Header className='body1_BD'>
          <div>其他朋友的解答</div>
          <>{solutionList.length}个</>
        </Header>
        <Slider>
          <LeftButton
            onClick={() =>
              decreaseIndex(
                page,
                setPage,
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
            custom={direction}
          >
            <Row
              key={page}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(2);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-2);
                }
              }}
            >
              {solutionList
                .slice(page, page + 3)
                .map((data, num) => SolutionBox(data, num, 1149))}
            </Row>
          </AnimatePresence>
          <RightButton
            onClick={() =>
              increaseIndex(
                page,
                setPage,
                isMoving,
                setIsMoving,
                solutionList.length,
                setIsStartIndex,
                setIsEndIndex
              )
            }
            endIndex={isEndIndex}
            top={130}
          >
            <img src='/icons/problem/right.svg' alt='right' />
          </RightButton>
        </Slider>
      </SliderWrapper>
    );
  }
  if (solutionList.length !== 0)
    return (
      <Wrapper>
        <Header className='body1_BD'>
          <div>其他朋友的解答</div>
          <>{solutionList.length}和</>
        </Header>
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
`;
const SliderWrapper = styled(Wrapper)`
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
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
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
