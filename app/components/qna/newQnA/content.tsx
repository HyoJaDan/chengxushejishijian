import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { mockContent } from '~/recoils/qna/new-question/content';
import { OutputQuestionInfo } from '../questioninfo-css';

const ContentMain = () => {
  const contents = useRecoilValue(mockContent);
  const outputContents = contents.map((value) => {
    const Idx = `value${value.date}`;
    const outputValues = value.tags.map((element) => {
      const key = `element_${Math.random()}`;
      return <div key={key}>#{element}</div>;
    });

    return (
      <ContentWrapper key={Idx}>
        <Head>
          <Title>{value.title}</Title>
          <Tags>{outputValues}</Tags>
        </Head>
        <Line />
        <OutputQuestionInfo value={value} isMain />
      </ContentWrapper>
    );
  });
  return <Contents>{outputContents}</Contents>;
};

const Content = () => {
  return (
    <Wrapper>
      <Suspense fallback={<div>loading...</div>}>
        <ContentMain />
      </Suspense>
    </Wrapper>
  );
};
export default Content;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Contents = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  width: 576px;
  height: 172px;

  /* Basic/White */

  background: #ffffff;
  /* grayscale/200 */

  border: 1px solid #efedea;
  border-radius: 8px;
  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  /* identical to box height, or 28px */

  /* grayscale/900 */

  color: #31302f;
`;
const Tags = styled.div`
  display: flex;
  gap: 12px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  /* primary/Blue500 */

  color: #2bc0ef;
`;
const Line = styled.div`
  border: 1px solid #efedea;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px;
`;
