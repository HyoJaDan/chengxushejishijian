import styled from 'styled-components';
import { TrainBox } from '~/components/problem/problem-box';

export default function BookmarkedProblem() {
  const problems = [];
  const problem = problems.map((data, index) => {
    return TrainBox(data, index, 1256);
  });
  return <Wrapper>{problem}</Wrapper>;
}

const Wrapper = styled.div`
  background: ${(prop) => prop.theme.color.basic.white};
  width: 1256px;
  margin: 24px 0;
  border: 1px solid #efedea;
  border-radius: 8px;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  margin: 74px 24px 24px 24px;
`;
const Container = styled.div`
  position: relative;
`;

const Background = styled.img`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 200px;
  aspect-ratio: 284 / 200;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 296 / 216;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
const ArchiveDate = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  color: #efedea;
`;
const ArchiveName = styled.div`
  position: absolute;
  top: 40px;
  left: 16px;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  color: ${(prop) => prop.theme.color.basic.white};
`;
