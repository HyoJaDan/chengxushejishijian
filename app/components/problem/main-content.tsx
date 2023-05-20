import styled from 'styled-components';
import type { IProblemHashTags } from '~/models/hashtags';
import type { IProblem } from '~/models/problem-and-solution/problem/problem';
import { Category } from './problem-box';

interface ITemp {
  problemData: IProblem;
  hashTags: IProblemHashTags;
}
export const ProblemMainContent = ({ problemData, hashTags }: ITemp) => {
  const { name } = problemData.lessonCategory;
  const hashTagList = hashTags.lessonHashtags.map((value) => {
    const { lessonHashtag } = value;
    const { id, tag, createdAt } = lessonHashtag;
    const Id = `${id}_${createdAt}`;
    return <Tag key={Id}>#{tag}</Tag>;
  });
  return (
    <Wrapper>
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
        <PreWrap className='body2_MD'>{problemData.description}</PreWrap>
        <Tags>{hashTagList}</Tags>
      </Main>
    </Wrapper>
  );
};
const Wrapper = styled.div`
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
const Content = styled.textarea`
  outline: none;
  border: none;
`;
const PreWrap = styled.div`
  white-space: pre-wrap;
  /* min-height: 200px;
  width: 100%;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
  resize: none; */
`;
const Tag = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #2bc0ef;
`;
