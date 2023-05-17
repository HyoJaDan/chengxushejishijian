import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  getSolutionList,
  solutionCategoryId,
} from '~/data/solution/get-solutions';
import { SolutionBox } from '../solutioin/main-page/solution-box';

export const Solution = () => {
  const sortBy = useRecoilValue(solutionCategoryId);
  const solutionList = useRecoilValue(getSolutionList(sortBy));
  const solution = solutionList.map((data, index) => {
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
