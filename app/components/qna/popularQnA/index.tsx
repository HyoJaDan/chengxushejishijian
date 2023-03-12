import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { popularContentSelector } from '~/recoils/qna/popular';
import { OutputQuestionInfo } from '../questioninfo-css';

const QnA = () => {
  const contents = useRecoilValue(popularContentSelector);

  const outputContents = contents.map((value) => {
    const Idx = `valueP_${Math.random()}`;
    const outputValues = value.tags.map((element) => {
      const key = `element_${Math.random()}`;
      return <div key={key}>#{element}</div>;
    });
    return (
      <ContentWrapper key={Idx}>
        <Title className='body1_SB'>
          <Rank>{value.rank}</Rank>
          {value.title}
        </Title>
        <OutputQuestionInfo value={value} isMain={false} />
        <Line />
        <Content className='body3_MD'>{value.content}</Content>
        <Tags className='body3_SB'>{outputValues}</Tags>
      </ContentWrapper>
    );
  });
  return <Contents>{outputContents}</Contents>;
};

export default function PopularQnA() {
  return (
    <Wrapper>
      <Header className='title4_BD'>많이 본 Q&A</Header>
      <Suspense fallback={<div>loading...</div>}>
        <QnA />
      </Suspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 392px;
  background: #efedea;
  mix-blend-mode: normal;
`;
const Header = styled.header`
  width: min(100%, 1200px);
  margin: 0 auto;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 404px !important;
  height: 256px;
  background: ${(prop) => prop.theme.color.basic.white};
  border-radius: 8px;
  padding: 24px;
  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
  display: flex;
  gap: 8px;
`;
const Tags = styled.div`
  display: flex;
  gap: 12px;
  color: #2bc0ef;
`;
const Line = styled.div`
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_100};
`;

const Contents = styled.div`
  display: -webkit-box;
  -webkit-box-align: center;
  gap: 24px;
  overflow-x: scroll;
  padding: 30px 171px;
`;
const Content = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const Rank = styled.div`
  width: 28px;
  height: 28px;
  background: ${(prop) => prop.theme.color.grayScale.gray_900};
  border-radius: 100px;
  color: ${(prop) => prop.theme.color.basic.white};
  display: flex;
  justify-content: center;
`;
