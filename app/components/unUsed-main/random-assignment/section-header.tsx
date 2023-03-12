import type { FC } from 'react';
import styled from 'styled-components';
import type { Assignment } from '~/models/assignment';
import { AttendanceList } from './attendance-list';

const attendances = [
  {
    id: 1,
    src: '/dev.png',
  },
  {
    id: 2,
    src: '/dev.png',
  },
  {
    id: 3,
    src: '/dev.png',
  },
];

type AssignmentSectionHeaderProps = {
  assignment: Assignment;
};
export const RandomAssignmentSectionHeader: FC<
  AssignmentSectionHeaderProps
> = ({ assignment }) => (
  <Wrapper>
    <Info>
      <CategoryChip>{assignment?.category.name}</CategoryChip>
      <Title>{assignment?.title}</Title>
      <Author className='body3_MD'>by {assignment?.author}</Author>
    </Info>
    <Meta>
      <Attendance>
        <AttendanceList attendances={attendances} />
        <span>+{assignment?.numSubmit}명 제출</span>
      </Attendance>
      <Icons>
        <Icon src='/icons/liked.svg' />
        <Icon src='/icons/bookmarked.svg' />
      </Icons>
    </Meta>
  </Wrapper>
);

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled(Row)`
  height: 32px;
  justify-content: space-between;
`;

const Info = styled(Row)`
  gap: 8px;
`;

const CategoryChip = styled.div`
  padding: 6px 8px;
  border-radius: 4px;
  background-color: #f2713b;
  color: ${(prop) => prop.theme.color.basic.white};
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  color: #1f1f1f;
`;

const Author = styled.span`
  display: block;
  color: rgba(31, 31, 31, 0.8);
`;

const Meta = styled(Row)`
  gap: 24px;
`;

const Attendance = styled(Row)`
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: rgba(31, 31, 31, 0.8);
`;

const Icons = styled(Row)`
  gap: 8px;
`;

const Icon = styled.img.attrs({
  role: 'button',
})`
  width: 24px;
`;
