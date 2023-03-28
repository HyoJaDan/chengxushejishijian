import ReactApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { memberStatistics } from '~/data/user/statistics';

export default function Chart() {
  const category = ['과제제출', '답변', '팔로워', '질문'];
  const real = useRecoilValue(memberStatistics);
  const userData = Object.values(real).map((value) => value + 1);
  const maxValue = Math.max(...userData, 11);
  return (
    <Wrapper>
      <Content>
        <Title className='body1_BD'>활동 분석</Title>
        <ReactApexChart
          type='radar'
          height='240px'
          width='280px'
          series={[
            {
              name: 'Series 1',
              data: [1, 1, 1, 1],
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
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
`;
const Content = styled.div`
  padding: 32px 41px 36px 16px;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
  margin-bottom: 10px;
`;
