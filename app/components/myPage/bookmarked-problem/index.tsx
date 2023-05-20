import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { TrainBox } from '~/components/problem/problem-box';
import { userId } from '~/data/my-page/user-id';
import { getBookmarkedProblemList } from '~/data/problem/get-problemList';

export default function BookmarkedProblem() {
  const id = useRecoilValue(userId);
  const problems = useRecoilValue(getBookmarkedProblemList(id));

  const problem = problems.map((data, index) => {
    return TrainBox(data, index, 1256);
  });
  return <Wrapper>{problem}</Wrapper>;
}

const Wrapper = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 1256px;
  margin: 28px auto;
  padding-bottom: 40px;
`;
