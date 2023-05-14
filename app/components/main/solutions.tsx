import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryId } from '~/data/problem/get-problems';
import { getSolutions } from '~/data/solution/get-solutions';
import { SolutionBox } from '../solutioin/main-page/solution-box';

export const Solution = () => {
  const sortBy = useRecoilValue(categoryId);
  const solutions = useRecoilValue(getSolutions(sortBy));

  const solution = solutions.map((data, index) => {
    return SolutionBox(data, index, 1256);
  });
  return <Wrapper>{solution}</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 1256px;
  margin: 28px auto;
  padding-bottom: 40px;
`;
