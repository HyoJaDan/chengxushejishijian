import styled from 'styled-components';

export const SolutionTrainingFallback = () => {
  return (
    <Content>
      <Header />
      <MainContent />
    </Content>
  );
};

const Content = styled.div`
  max-width: 1256px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Header = styled.div`
  width: 100%;
  height: 121px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
`;
const MainContent = styled.div`
  width: 100%;
  height: 540px;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
