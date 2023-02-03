import { addMonths, subMonths } from 'date-fns';
import { useState } from 'react';
import styled from 'styled-components';
import CalenderCells from './calender-cells';
import CalenderHeader from './calender-header';
// 1. 백엔드한테 유저별로 과제를 몇개했는지, 언제했는지, 유저 정보를 저장하는 값들과 함께 업데이트해달라고 부탁
//  2. 그걸 recoil로 가져와서, 안가져와질시에 로그인 다시하고, 지금 이번달 날짜들은 다 아니까, 현제 날짜를 동그라미,
//     그전에 업로드했던 날짜들을 색칠하는 것을 작성.
//  3. 클릭은 작성 안해도 될것 같고, 로컬 스토레지에 값을 저장해볼까? 필요한가

export default function Calender() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <Wrapper>
      <Margin>
        <CalenderHeader
          currentMonth={currentMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <CalenderCells currentMonth={currentMonth} />
      </Margin>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #efedea;
  height: 234px;
  width: 296px;
`;
const Margin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: -webkit-fill-available;
  height: 100%;
  gap: 5px;
`;
