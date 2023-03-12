import ReactApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { memberStatistics } from '~/recoils/user/statistics';

export default function Chart() {
  const category = ['과제제출', '답변', '팔로워', '질문'];
  const real = useRecoilValue(memberStatistics);
  const userData = Object.values(real);
  const maxValue = Math.max(...userData, 10);

  return (
    <Wrapper>
      <Content>
        <Title>활동 분석</Title>
        <ReactApexChart
          type='radar'
          height='240px'
          width='280px'
          series={[
            {
              name: 'Series 1',
              data: userData,
            },
          ]}
          options={{
            chart: {
              toolbar: {
                show: false,
              },
            },
            markers: {
              size: 0,
            },
            stroke: {
              show: true,
              width: 1,
              curve: 'smooth',
              colors: ['#0088e8cc'],
              dashArray: 0,
            },
            yaxis: {
              show: false,
              tickAmount: 3,
              max: maxValue,
            },
            xaxis: {
              categories: category,
              labels: {
                style: {
                  colors: ['#484746', '#484746', '#484746', '#484746'],
                  fontSize: '12px',
                  fontWeight: 400,
                },
              },
            },
            fill: {
              colors: ['#199ee933'],
            },
            plotOptions: {
              radar: {
                size: 90,
              },
            },
          }}
        />
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 296px;
  height: 316px;
  background: #ffffff;
  border: 1px solid #efedea;
  border-radius: 8px;
`;
const Content = styled.div`
  padding: 32px 41px 36px 16px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  /* identical to box height, or 28px */

  /* grayscale/800 */

  color: #484746;
  margin-bottom: 10px;
`;
