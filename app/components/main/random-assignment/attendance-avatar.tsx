import styled from 'styled-components';
import type { FCClass } from '~/components/common/types/function-component';

type AttendanceAvatarProps = {
  imgSrc: string;
};
export const AttendanceAvatar: FCClass<AttendanceAvatarProps> = ({
  imgSrc,
  className,
}) => <AvatarImage className={className} src={imgSrc} />;

const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 50%;
`;
