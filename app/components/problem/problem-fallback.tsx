import styled from 'styled-components';

export const ProblemFallback = () => {
  return (
    <Wrapper>
      <Main />
      <WaitAnswer />
      <Header className='body1_BD'>유사한 트레이닝 문제</Header>
      <Boxes>
        <SimilarBox />
        <SimilarBox />
        <SimilarBox />
      </Boxes>
      <Header className='body1_BD'>다른 스위머의 풀이</Header>
      <Boxes>
        <OtherSolutionBox />
        <OtherSolutionBox />
        <OtherSolutionBox />
      </Boxes>
      <Comment />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 0px auto;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Main = styled.div`
  width: 1149px;
  height: 408px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 29px 31px 25px 24px;
`;
const WaitAnswer = styled.div`
  margin-top: 8px;
  width: 1149px;
  height: 102px;
  padding: 25px 24px;
  background-color: ${(prop) => prop.theme.color.primary.blue.blue_600};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Header = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
  margin-top: 8px;
`;
const Boxes = styled.div`
  display: flex;
  gap: 24px;
`;
const SimilarBox = styled.div`
  width: 367px;
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
const Comment = styled.div`
  padding: 24px;
  width: 1149px;
  min-height: 200px;
  background-color: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const OtherSolutionBox = styled(SimilarBox)`
  height: 309px;
`;
