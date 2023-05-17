import styled from 'styled-components';
import { Circle } from '~/components/global-navigation-bar/login';
import type { IProblemHashTags } from '~/models/hashtags';
import type { ISolutionDetail } from '~/models/problem-and-solution/solution/solution-detail';

interface ITemp {
  solutionData: ISolutionDetail;
  hashTags: IProblemHashTags;
}
export const SolutionMainContent = ({ solutionData, hashTags }: ITemp) => {
  const { id, nickname, job, thumbnail } = solutionData.member;

  /*   const hashTagList = hashTags.lessonHashtags.map((value) => {
    const { lessonHashtag } = value;
    const { id, tag, createdAt } = lessonHashtag;
    const Id = `${id}_${createdAt}`;
    return <Tag key={Id}>#{tag}</Tag>;
  }); */
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
  return (
    <Wrapper>
      <Header>
        <Titles>
          <Title className='title4_BD'>{solutionData.title}</Title>
        </Titles>
        <SolutionUserInformation>
          <User>
            {outputThumbnail()}
            <NameAndPosition>
              <NickName className='body3_BD'>{nickname}</NickName>
              <Job className='caption1_RG'>{job}</Job>
            </NameAndPosition>
          </User>
          <DateFontcaption1SB className='caption1_SB'>
            {solutionData.updatedAt.substr(0, 10)}
          </DateFontcaption1SB>
        </SolutionUserInformation>
      </Header>
      <Main className='body2_MD'>
        <Content className='body2_MD' defaultValue={solutionData.description} />
        {/* <Tags>{hashTagList}</Tags> */}
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
  height: fit-content;
  width: 100%;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
  resize: none;
`;

const Tag = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #2bc0ef;
`;
const ThumbnailBackground = styled(Circle)`
  width: 48px;
  height: 48px;
`;
const Img = styled.img`
  width: 100%;
`;
const SolutionUserInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const NameAndPosition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
const NickName = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const Job = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const User = styled.div`
  display: flex;
  gap: 8px;
`;
