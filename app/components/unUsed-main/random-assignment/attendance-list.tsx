import type { FC } from 'react';
import styled from 'styled-components';
import { AttendanceAvatar } from './attendance-avatar';

type AttendanceListProps = {
  attendances: {
    src: string;
    id: number;
  }[];
};
export const AttendanceList: FC<AttendanceListProps> = ({ attendances }) => (
  <Wrapper>
    {attendances.map((at) => (
      <OverlappedAvatar key={`attendance-avatar-${at.id}`} imgSrc={at.src} />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 70px;
`;

const OverlappedAvatar = styled(AttendanceAvatar)`
  position: relative;
  background-color: white;
  &:nth-child(2) {
    left: -12px;
  }
  &:nth-child(3) {
    left: -24px;
  }
`;
