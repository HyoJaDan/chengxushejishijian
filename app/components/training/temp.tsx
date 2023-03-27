/* 1. AnimatePresence는 컴포넌트가 렌터링 되거나 파괴될 때 효과를 줄 수 있다. */
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

export const Temp = () => {
  const [index, setIndex] = useState(0);
  return (
    <Slider>
      {/* 3. 우리는 key만 바꿔주고 있다. 이 함수의 트리거는 key다.
		 key가 변경되면, react가 새 Row가 만들어졌다고 생각한다. 
		그리고 새 Row를 생성하려고 할 때, 원래 있던 Row는 파괴 된다. 그리고 파괴될때 exit이 
		실행된다. 그리고 다시 실행될때 initial과 animate가 생성된다. */}
      <AnimatePresence>
        <Row
          /* variants={rowVariants} */
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{ type: 'tween', duration: 1 }}
          key={index}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Box key={i}>{i}</Box>
          ))}
        </Row>
      </AnimatePresence>
    </Slider>
  );
};
const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-color: white;
  height: 200px;
  color: red;
  font-size: 66px;
`;

/* const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
}; */
