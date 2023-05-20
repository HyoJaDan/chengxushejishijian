import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { SolutionBox } from '~/components/solutioin/main-page/solution-box';
import { userId } from '~/data/my-page/user-id';
import { getLikedSolution } from '~/data/solution/get-solutions';

export default function LikedSolution() {
  const id = useRecoilValue(userId);
  const solutionList = useRecoilValue(
    getLikedSolution(id as unknown as string)
  );
  const solutions = solutionList.map((data, index) => {
    return SolutionBox(data, index, 1256);
  });
  return <Wrapper>{solutions}</Wrapper>;
}

const Wrapper = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 1256px;
  margin: 24px auto;
  padding-bottom: 40px;
`;
