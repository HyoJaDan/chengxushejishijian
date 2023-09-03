import { Link } from '@remix-run/react';
import styled from 'styled-components';

export const WaitAnswer = ({ id }: { id: string }) => {
  return (
    <Wrapper>
      <Letters>
        <LineOne className='body1_BD'>正在等待你的解答</LineOne>
        <LineTwo className='body3_MD'>
          提交我的解释，然后查看其他用户的解释。
        </LineTwo>
      </Letters>
      <SolutionButton to={`/solution/problem/${id}`} className='body2_SB'>
        提交解答
      </SolutionButton>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 1149px;
  height: 102px;
  padding: 25px 24px;
  background-color: ${(prop) => prop.theme.color.primary.blue.blue_600};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;
const Letters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: fit-content;
  height: 54px;
  background: #ffffff;
  border-radius: 100px;
  color: ${(prop) => prop.theme.color.primary.blue.blue_600};
  cursor: pointer;
`;
const SolutionButton = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: fit-content;
  height: 54px;
  background: #ffffff;
  border-radius: 100px;
  color: ${(prop) => prop.theme.color.primary.blue.blue_600};
  cursor: pointer;
`;
const LineOne = styled.div`
  color: white;
`;
const LineTwo = styled.div`
  color: ${(prop) => prop.theme.color.primary.blue.blue_200};
`;
