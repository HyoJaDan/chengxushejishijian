import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

export default function Chart() {
  const tempData = [8, 5, 3, 4, 10];
  const tempName = ['과제제출', '답변', '팔로워', '팔로잉', '질문'];

  return (
    <Wrapper>
      <ReactApexChart
        type='radar'
        height='240px'
        width='280px'
        series={[
          {
            name: 'Series 1',
            data: tempData,
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
            max: 15,
          },
          xaxis: {
            categories: tempName,
            labels: {
              style: {
                colors: ['#484746', '#484746', '#484746', '#484746', '#484746'],
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
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  margin: 16px;
`;
