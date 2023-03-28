import styled from 'styled-components';

export const ProblemFallback = () => {
  return (
    <Wrapper>
      <Main />
      <WaitAnswer />
      <Header className='body1_BD'>유사한 트레이닝 문제</Header>
      <Boxes>
        <Box />
        <Box />
        <Box />
      </Boxes>
      <Commit />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 0px auto;
  padding-top: 67px;
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
  gap: 10px;
`;
const Box = styled.div`
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
const Commit = styled.div`
  margin-top: 66px;
  margin-bottom: 50px;
  padding: 24px;
  width: 1149px;
  min-height: 164px;
  background-color: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;