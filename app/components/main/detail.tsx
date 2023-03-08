import { useParams } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getLessonDetail, getLessonDetailTags } from '~/recoils/main/lesson';

export const LessonDetail = () => {
  const params = useParams();
  const data = useRecoilValue(getLessonDetail(params.id));
  const hashTags = useRecoilValue(getLessonDetailTags(params.id));
  console.log(hashTags);

  return (
    <Wrapper>
      <Box>
        <Header>
          {/* 카테고리 여 넣고 */}
          <Titles>
            <Title>{data.title}</Title>
            <Date>{data.updatedAt.substr(0, 10)}</Date>
          </Titles>
        </Header>
        <Main>{data.description}</Main>
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
  background: #ffffff;
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
  font-weight: 700;
  font-size: 24px;
  line-height: 132%;
  color: #31302f;
`;
const Header = styled.div`
  padding-bottom: 23px;
  border-bottom: 1px solid #efedea;
`;
const Main = styled.div`
  padding-top: 32px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  min-height: 154px;
  color: #484746;
`;
const Date = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  text-align: right;
  color: #c2c0bd;
`;
