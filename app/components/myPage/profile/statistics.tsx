import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { problemStatistics } from '~/data/user/problem.statistics';

export default function Statistics() {
  const data = useRecoilValue(problemStatistics);
  console.log(data, 'temp');
  return (
    <Wrapper>
      <Content>
        <Title className='body1_BD'>과제 통계</Title>
        <MainContent>
          <FlexColumnPlusLine>
            <Sqare>
              <AllDay>전체</AllDay>
            </Sqare>
            <Flex>
              <Day className='body2_MD'>{data.totalDay}일</Day>
              <Number className='body2_BD'>{data.totalCount}개</Number>
            </Flex>
          </FlexColumnPlusLine>
          <FlexColumn>
            <Sqare>
              <ThisMonth>이번 달</ThisMonth>
            </Sqare>
            <Flex>
              <Day className='body2_MD'>{data.specificMonthDay}일</Day>
              <Number className='body2_BD'>{data.specificMonthCount}개</Number>
            </Flex>
          </FlexColumn>
        </MainContent>
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
  height: 100%;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
const AllDay = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 144%;
  text-align: center;
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const ThisMonth = styled(AllDay)`
  color: ${(prop) => prop.theme.color.primary.blue.blue_600};
`;
const Sqare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1px 4px;
  gap: 10px;

  width: fit-content;
  height: 19px;
  background: ${(prop) => prop.theme.color.grayScale.gray_100};
  border-radius: 4px;
`;
const Line = styled.div`
  /* grayscale/200 */
`;
const MainContent = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  height: 100%;
`;
const Day = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const Number = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
const Flex = styled.div`
  display: flex;
  gap: 8px;
`;
const FlexColumn = styled.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
  align-items: center;
  padding: 0 28px;
`;
const FlexColumnPlusLine = styled(FlexColumn)`
  border-right: 1px solid #efedea;
  height: fit-content;
`;
