import { format } from 'date-fns';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';

interface HeaderProps {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

export const CalenderHeader = ({
  currentMonth,
  prevMonth,
  nextMonth,
}: HeaderProps) => {
  return (
    <Wrapper>
      <FiChevronLeft onClick={prevMonth} />
      <Gap>
        <div>{format(currentMonth, 'yyyy')}년</div>
        <div>{format(currentMonth, 'M')}월</div>
      </Gap>
      <FiChevronRight onClick={nextMonth} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-weight: 400;
  line-height: 140%;

  display: flex;
  align-items: center;
  gap: 10px;
`;
const Gap = styled.div`
  display: flex;
  gap: 4px;
`;
