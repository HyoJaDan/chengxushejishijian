import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  ProblemCategoryId,
  getProblems,
  numOfProblems,
} from '~/data/problem/get-problemList';
import { TrainBox } from '../problem/problem-box';

export const Training = () => {
  const sortBy = useRecoilValue(ProblemCategoryId);
  const problems = useRecoilValue(getProblems(sortBy));
  const numOfProblem = useSetRecoilState(numOfProblems);
  numOfProblem(problems.length);
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
  padding-bottom: 40px;
`;
