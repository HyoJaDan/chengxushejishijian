import { Link } from '@remix-run/react';
import styled from 'styled-components';
import type { IProblems } from '~/models/problem-and-solution/problem/problems';

export const TrainBox = (data: IProblems, index: number, width: number) => {
  const { problemId, title, createdAt, description, thumbnail, categories } =
    data;
  const keyId = `${problemId}_${index}`;
  const maxWidth = Math.floor((width - 48) / 3);
  return (
    <Box to={`/problem/${problemId}`} key={keyId} maxwidth={maxWidth}>
      <Flex>
        <Category className='caption1_SB'>{categories}</Category>
        <Category className='caption1_SB'>{createdAt}</Category>
      </Flex>
      <Title className='body1_BD'>{title}</Title>
    </Box>
  );
};
const Flex = styled.div`
  display: flex;
  gap: 5px;
`;
const Box = styled(Link)<{ maxwidth: number }>`
  width: ${(prop) => `${prop.maxwidth}px`};
  height: 142px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;
export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  gap: 4px;
  width: fit-content;
  height: 29px;
  background: #dfffcc;
  border-radius: 4px;
  color: #429510;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const Img = styled.img``;
const Counts = styled.div`
  display: flex;
  gap: 16px;
`;
const Count = styled.div`
  display: flex;
  gap: 4px;
`;
const Text = styled.div`
  color: ${(prop) => prop.theme.color.basic.black};
`;
