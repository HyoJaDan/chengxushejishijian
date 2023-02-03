/* eslint-disable no-nested-ternary */
import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import styled from 'styled-components';

// week, 이번달 아닌날, 이번달인날, 오늘, 커밋한날 이 중첩될 수 있다.
type IDate = 'week' | 'notThisMonth' | 'thisMonth' | 'today' | 'upLoaded';

interface dateType {
  date: string;
  type: IDate[];
}

const CalenderCells = ({ currentMonth }: { currentMonth: Date }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  let day = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const today = format(new Date(), 'dd.MM.yyyy');

  let formattedDate = '';
  const data: dateType[] = [
    { date: '일', type: ['week'] },
    { date: '월', type: ['week'] },
    { date: '화', type: ['week'] },
    { date: '수', type: ['week'] },
    { date: '목', type: ['week'] },
    { date: '금', type: ['week'] },
    { date: '토', type: ['week'] },
  ];
  const tempData = ['28.11.2022', '10.12.2022', '12.12.2022', '28.12.2022'];
  while (day <= endDate) {
    formattedDate = format(day, 'd');
    const exactDay = format(day, 'dd.MM.yyyy');

    if (day < monthStart || day > monthEnd)
      data.push({
        date: formattedDate,
        type: ['notThisMonth'],
      });
    else data.push({ date: formattedDate, type: ['thisMonth'] });
    if (exactDay === today) data[data.length - 1].type.push('today');
    if (tempData.includes(exactDay))
      data[data.length - 1].type.push('upLoaded');
    day = addDays(day, 1);
  }

  const cells = data.map(({ date, type }, idx) => {
    const Idx = `${date}_${idx}`;
    return (
      <div
        className={
          type.includes('week')
            ? type.includes('upLoaded')
              ? 'CalenderUpLoadedNotThisMonth CalenderWeekCells'
              : 'CalenderWeekCells'
            : type.includes('thisMonth')
            ? type.includes('today')
              ? type.includes('upLoaded')
                ? 'CalenderUpLoaded CalenderToday'
                : 'CalenderToday'
              : type.includes('upLoaded')
              ? 'CalenderUpLoaded'
              : undefined
            : type.includes('upLoaded')
            ? 'CalenderUpLoaded CalenderNotThisMonth'
            : 'CalenderNotThisMonth'
        }
        key={Idx}
      >
        {date}
      </div>
    );
  });

  return <Wrapper>{cells} </Wrapper>;
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  justify-items: center;
  align-items: center;
  align-content: space-evenly;
`;
export default CalenderCells;
