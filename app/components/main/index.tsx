/* eslint-disable no-underscore-dangle */
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryId, getProblems } from '~/data/problem/get-problems';
import { TrainBox } from '../problem/problem-box';

export const Training = () => {
  const sortBy = useRecoilValue(categoryId);
  const problems = useRecoilValue(getProblems(sortBy));

  const problem = problems.map((data, index) => {
    return TrainBox(data, index, 1256);
  });
  return <Wrapper>{problem}</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 1256px;
  margin: 28px auto;
`;
