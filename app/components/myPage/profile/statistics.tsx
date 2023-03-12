import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { memberStatistics } from '~/recoils/user/statistics';

export default function Statistics() {
  const temp = useRecoilValue(memberStatistics);
  return (
    <Wrapper>
      <Content>
        <Title>과제 통계</Title>
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 296px;
  height: 160px;
  background: #ffffff;
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
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #484746;
`;
