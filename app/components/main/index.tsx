/* eslint-disable no-underscore-dangle */
import { Link } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryId, getLessons } from '~/recoils/main/category';

export const Training = () => {
  const id = useRecoilValue(categoryId);
  const lessons = useRecoilValue(getLessons(id));

  const lesson = lessons.map((data, index) => {
    const keyId = `${data.id_index}`;
    return (
      <Box to={`/training/${data.id}`} key={keyId}>
        <Category>{data.lessonCategory.name}</Category>
        <Title>{data.title}</Title>
        <Counts>
          <Count>
            <Img src='/icons/lesson/likes.svg' alt='lessonLikes' />
            <Text>{data._count.lessonLikes}</Text>
          </Count>
          <Count>
            <Img src='/icons/lesson/comments.svg' alt='lessonLikes' />
            <Text>{data._count.lessonComments}</Text>
          </Count>
          <Count>
            <Img src='/icons/lesson/solutions.svg' alt='lessonLikes' />
            <Text>{data._count.lessonSolutions}</Text>
          </Count>
        </Counts>
      </Box>
    );
  });
  return <Wrapper>{lesson}</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  max-width: 1256px;
  margin: 28px auto;
`;
const Box = styled(Link)`
  width: 403px;
  height: 142px;
  background: #ffffff;
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;
const Category = styled.div`
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
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  color: #429510;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #31302f;
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
  color: black;
`;
