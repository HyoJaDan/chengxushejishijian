import styled from 'styled-components';

export const SolutionFallBack = () => {
  return (
    <Wrapper>
      <FlexBox>
        <A />
        <B />
      </FlexBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1256px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  gap: 38px;
`;
const A = styled.div`
  width: 1149px;
  height: 408px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 29px 31px 25px 24px;
`;
const B = styled.div`
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
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
