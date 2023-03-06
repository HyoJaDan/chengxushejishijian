/* eslint-disable no-underscore-dangle */
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryId, getLessons } from '~/recoils/main/category-id';

export const Training = () => {
  const id = useRecoilValue(categoryId);
  const lessons = useRecoilValue(getLessons(id));
  const lesson = lessons.map((data, index) => {
    const keyId = `${data.id_index}`;
    return (
      <Box key={keyId}>
        <Category>{data.lessonCategory.name}</Category>
        <Title>{data.title}</Title>
        <Counts>
          <Count>
            <Img src='/icons/lesson/likes.svg' alt='lessonLikes' />
            {data._count.lessonLikes}
          </Count>
          <Count>
            <Img src='/icons/lesson/likes.svg' alt='lessonLikes' />
            {data._count.lessonComments}
          </Count>
          <Count>
            <Img src='/icons/lesson/likes.svg' alt='lessonLikes' />
            {data._count.lessonSolutions}
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
`;
const Box = styled.div`
  width: 403px;
  height: 142px;
  background: #ffffff;
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
