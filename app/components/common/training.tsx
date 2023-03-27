import { Link } from '@remix-run/react';
import styled from 'styled-components';
import type { ILessons } from '~/models/lesson/lessons';

export const TrainBox = (data: ILessons, index: number) => {
  const { id, lessonCategory, title, _count } = data;
  const { name } = lessonCategory;
  const { lessonLikes, lessonComments, lessonSolutions } = _count;
  const keyId = `${id}_${index}`;

  return (
    <Box to={`/training/${id}`} key={keyId}>
      <Category className='caption1_SB'>{name}</Category>
      <Title className='body1_BD'>{title}</Title>
      <Counts>
        <Count>
          <Img src='/icons/lesson/likes.svg' alt='lessonLikes' />
          <Text>{lessonLikes}</Text>
        </Count>
        <Count>
          <Img src='/icons/lesson/comments.svg' alt='lessonLikes' />
          <Text>{lessonComments}</Text>
        </Count>
        <Count>
          <Img src='/icons/lesson/solutions.svg' alt='lessonLikes' />
          <Text>{lessonSolutions}</Text>
        </Count>
      </Counts>
    </Box>
  );
};

const Box = styled(Link)`
  width: 400px;
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
