import { useParams } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  getProblemDetail,
  getProblemDetailTags,
} from '~/data/recoils/main/problem';
import { Category } from '../common/training';
import { SimilerTraining } from './similer-training';
import { WaitAnswer } from './wait';

export const TrainingMain = () => {
  const params = useParams();
  const problemData = useRecoilValue(getProblemDetail(params.id));
  const hashTags = useRecoilValue(getProblemDetailTags(params.id as string));
  const { name } = problemData.lessonCategory;
  const hashTagList = hashTags.lessonHashtags.map((value) => {
    const { lessonHashtag } = value;
    const { id, tag, createdAt } = lessonHashtag;
    const Id = `${id}_${createdAt}`;
    return <Tag key={Id}>#{tag}</Tag>;
  });
  return (
    <Wrapper>
      <Box>
        <Header>
          <Category className='caption1_SB'>{name}</Category>
          <Titles>
            <Title className='title4_BD'>{problemData.title}</Title>
            <DateFontcaption1SB className='caption1_SB'>
              {problemData.updatedAt.substr(0, 10)}
            </DateFontcaption1SB>
          </Titles>
        </Header>
        <Main className='body2_MD'>
          <Content
            className='body2_MD'
            defaultValue={problemData.description}
          />
          <Tags>{hashTagList}</Tags>
        </Main>
      </Box>
      <WaitAnswer />
      <SimilerTraining id={problemData.lessonCategory.id} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 67px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Box = styled.div`
  width: 1149px;
  height: 408px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 29px 31px 25px 24px;
`;
const Titles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 23px;
  border-bottom: 1px solid #efedea;
`;
const Main = styled.div`
  padding-top: 32px;
  min-height: 154px;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
const DateFontcaption1SB = styled.div`
  text-align: right;
  color: #c2c0bd;
`;
const Tags = styled.div`
  display: flex;
  gap: 8px;
`;
const Tag = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #2bc0ef;
`;
const Content = styled.textarea`
  outline: none;
  border: none;
  min-height: 200px;
  width: 100%;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
