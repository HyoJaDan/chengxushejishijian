import { Link } from '@remix-run/react';
import styled from 'styled-components';
import type { ISolutions } from '~/models/solution/solutions';

export const SolutionBox = (data: ISolutions, index: number, width: number) => {
  console.log(data);
  const { id, description, member, _count } = data;
  const { lessonSolutionComments, lessonSolutionLikes } = _count;
  const { thumbnail, nickname } = member;
  const keyId = `${index}_${id}`;
  const maxWidth = Math.floor((width - 48) / 3);
  const outputThumbnail = () => {
    if (thumbnail !== '') {
      return (
        <Circle>
          <Img src={thumbnail} alt='' />
        </Circle>
      );
    }
    return <Circle />;
  };
  return (
    <Box to={`/solution/${id}`} key={keyId} maxwidth={maxWidth}>
      <Content className='body2_BD'>{description}</Content>
      <TeskInformaion>
        <Header>
          <Category className='caption1_SB'>category</Category>
          <Title className='body1_BD'>task_title</Title>
        </Header>
        <SubContent>
          <User>
            {outputThumbnail()}
            <Name>{nickname}</Name>
          </User>
          <Counts>
            <Count>
              <Img src='/icons/problem/likes.svg' alt='likes' />
              <Text>{lessonSolutionLikes}</Text>
            </Count>
            <Count>
              <Img src='/icons/problem/comments.svg' alt='comments' />
              <Text>{lessonSolutionComments}</Text>
            </Count>
          </Counts>
        </SubContent>
      </TeskInformaion>
    </Box>
  );
};

const Box = styled(Link)<{ maxwidth: number }>`
  width: ${(prop) => `${prop.maxwidth}px`};
  height: 309px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;
const Content = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
  background-color: ${(prop) => prop.theme.color.primary.blue.blue_100};
  height: -webkit-fill-available;
`;
const TeskInformaion = styled.div`
  height: 109px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
const Header = styled.div`
  display: flex;
  gap: 8px;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
const SubContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Name = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const Circle = styled.div`
  display: grid;
  place-content: center;
  width: 32px;
  height: 32px;
  background-color: #c2c0bd;
  clip-path: circle(50%);
  color: ${(prop) => prop.theme.color.basic.black};
  cursor: pointer;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
`;

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
