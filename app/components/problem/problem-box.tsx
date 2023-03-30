import { Link } from '@remix-run/react';
import styled from 'styled-components';
import type { IProblems } from '~/models/problem/problems';

export const TrainBox = (data: IProblems, index: number, width: number) => {
  const { id, lessonCategory, title, _count } = data;
  const { name } = lessonCategory;
  const { lessonLikes, lessonComments, lessonSolutions } = _count;
  const keyId = `${id}_${index}`;
  const maxWidth = Math.floor((width - 48) / 3);
  return (
    <Box to={`/problem/${id}`} key={keyId} maxwidth={maxWidth}>
      <Category className='caption1_SB'>{name}</Category>
      <Title className='body1_BD'>{title}</Title>
      <Counts>
        <Count>
          <Img src='/icons/problem/likes.svg' alt='problemLike' />
          <Text>{lessonLikes}</Text>
        </Count>
        <Count>
          <Img src='/icons/problem/comments.svg' alt='problemComments' />
          <Text>{lessonComments}</Text>
        </Count>
        <Count>
          <Img src='/icons/problem/solutions.svg' alt='problemSolutions' />
          <Text>{lessonSolutions}</Text>
        </Count>
      </Counts>
    </Box>
  );
};

const Box = styled(Link)<{ maxwidth: number }>`
  width: ${(prop) => `${prop.maxwidth}px`};
  height: 142px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;
export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  gap: 4px;
  width: 68px;
  height: 29px;
  background: #dfffcc;
  border-radius: 4px;
  color: #429510;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const Counts = styled.div`
  display: flex;
  gap: 16px;
`;
const Count = styled.div`
  display: flex;
  gap: 4px;
`;
const Img = styled.img``;
const Text = styled.div`
  color: ${(prop) => prop.theme.color.basic.black};
`;
