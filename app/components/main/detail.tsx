import { useParams } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getLessonDetail, getLessonDetailTags } from '~/recoils/main/lesson';

interface ILessonHashtag {
  id: number;
  tag: string;
  createdAt: string;
}

export const LessonDetail = () => {
  const params = useParams();
  const data = useRecoilValue(getLessonDetail(params.id));
  const hashTags = useRecoilValue(getLessonDetailTags(params.id));

  /* const hashTagList = hashTags.lessonHashtag.map(
    ({ id, tag, createdAt }: ILessonHashtag) => {
      const Id = `${id}_${createdAt}`;
      return <Tag key={Id}>{tag}</Tag>;
    }
  ); */
  return (
    <Wrapper>
      <Box>
        <Header>
          {/* 카테고리 여 넣고 */}
          <Titles>
            <Title className='title4_BD'>{data.title}</Title>
            <DateFontcaption1SB className='caption1_SB'>
              {data.updatedAt.substr(0, 10)}
            </DateFontcaption1SB>
          </Titles>
        </Header>
        <Main className='body2_MD'>
          {data.description}
          {/* <Tags>{hashTagList}</Tags> */}
        </Main>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 67px auto; //
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
