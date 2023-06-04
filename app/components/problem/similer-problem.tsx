import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getProblemsById } from '~/data/problem/get-problemList';
import { exceptCurrentAdress } from '~/hooks/except-current-adress';
import { increaseIndex } from '~/hooks/increase-index';
import type { IProblems } from '~/models/problem-and-solution/problem/problems';
import { Button } from '../common/right-button';
import { TrainBox } from './problem-box';

export const SimilerTraining = ({
  id,
  paramsId,
}: {
  id: number;
  paramsId: number;
}) => {
  const problems = useRecoilValue(getProblemsById(id));
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<boolean>(false);
  const problemList = exceptCurrentAdress(problems, paramsId);
  const [endIndex, setEndIndex] = useState<boolean>(false);

  if (problemList.length > 3)
    return (
      <SliderWrapper>
        <Header className='body1_BD'>
          <div>유사한 트레이닝 문제</div>
          <>{problemList.length}개</>
        </Header>
        <Slider>
          <AnimatePresence
            onExitComplete={() => setLeaving((prev: boolean) => !prev)}
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
              {problemList
                .slice(index, index + 3)
                .map((data: IProblems, num: number) =>
                  TrainBox(data, num, 1149)
                )}
            </Row>
          </AnimatePresence>
          <Button
            onClick={() =>
              increaseIndex(
                index,
                setIndex,
                leaving,
                setLeaving,
                problemList.length,
                setEndIndex
              )
            }
            endIndex={endIndex}
            top={46}
          >
            <img src='/icons/problem/right.svg' alt='right' />
          </Button>
        </Slider>
      </SliderWrapper>
    );
  if (problemList.length === 0) return null;
  return (
    <Wrapper>
      <Header className='body1_BD'>유사한 트레이닝 문제</Header>
      <Slider>
        <Contents>
          {problemList.map((data: IProblems, num: number) =>
            TrainBox(data, num, 1149)
          )}
        </Contents>
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const SliderWrapper = styled(Wrapper)`
  margin-bottom: 142px;
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
