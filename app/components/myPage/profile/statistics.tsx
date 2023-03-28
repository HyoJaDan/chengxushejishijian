import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { memberStatistics } from '~/data/user/statistics';

export default function Statistics() {
  const temp = useRecoilValue(memberStatistics);
  return (
    <Wrapper>
      <Content>
        <Title className='body1_BD'>과제 통계</Title>
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 296px;
  height: 160px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
`;
const Content = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
