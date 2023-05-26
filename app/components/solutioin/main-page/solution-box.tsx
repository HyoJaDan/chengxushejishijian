import Editor from '@draft-js-plugins/editor';
import { Link } from '@remix-run/react';
import { EditorState, convertFromRaw } from 'draft-js';
import styled from 'styled-components';
import { Circle } from '~/components/global-navigation-bar/login';
import type { ISolutions } from '~/models/problem-and-solution/solution/solutions';
import { myBlockStyleFn } from '../editor/my-block-style-function';

export const SolutionBox = (data: ISolutions, index: number, width: number) => {
  const { id, description, member, _count, title } = data;
  const { lessonSolutionComments, lessonSolutionLikes } = _count;
  const { thumbnail, nickname } = member;
  const keyId = `${index}_${id}`;
  const maxWidth = Math.floor((width - 48) / 3);
  const outputThumbnail = () => {
    if (thumbnail !== '') {
      return (
        <ThumbnailBackground>
          <Img src={thumbnail} alt='' />
        </ThumbnailBackground>
      );
    }
    return <ThumbnailBackground />;
  };
  const parsedJson = JSON.parse(description);
  const contentState = {
    entityMap: parsedJson.entityMap,
    blocks: parsedJson.blocks,
  };
  const restoredContentState = convertFromRaw(contentState);
  const restoredEditorState =
    EditorState.createWithContent(restoredContentState);

  return (
    <Box to={`/solution/${id}`} key={keyId} maxwidth={maxWidth}>
      <Content className='body2_BD'>
        <Editor
          editorState={restoredEditorState}
          blockStyleFn={myBlockStyleFn}
        />
      </Content>

      <TeskInformaion>
        <Header>
          <Title className='body1_BD'>{title}</Title>
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
  background-color: #f0fbff;
  height: 200px;
  overflow: hidden;
  padding: 24px;
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

const ThumbnailBackground = styled(Circle)``;
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
