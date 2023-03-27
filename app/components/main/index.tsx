/* eslint-disable no-underscore-dangle */
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryId, getLessons } from '~/data/recoils/main/lessons';
/* import { categoryId, getLessons } from '~/data/recoils/main/category'; */
import { TrainBox } from '../common/training';

export const Training = () => {
  const sortBy = useRecoilValue(categoryId);
  const lessons = useRecoilValue(getLessons(sortBy));

  const lesson = lessons.map((data, index) => {
    return TrainBox(data, index);
  });
  return <Wrapper>{lesson}</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 1256px;
  margin: 28px auto;
`;
