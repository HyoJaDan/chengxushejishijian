import styled from 'styled-components';
import { Description } from '~/components/common/problem-and-solution/description';
import type { ISolutionDetail } from '~/models/solution-detail';

interface IGetData {
  solutionData: ISolutionDetail;
}
export const SolutionMainContent = ({ solutionData }: IGetData) => {
  return (
    <Wrapper>
      <Header>
        <Titles>
          <Title className='title4_BD'>{solutionData.title}</Title>
        </Titles>
        <SolutionUserInformation>
          <DateFontcaption1SB className='caption1_SB'>
            {solutionData.createdAt}
          </DateFontcaption1SB>
        </SolutionUserInformation>
      </Header>
      <Main className='body2_MD'>
        <Description description={solutionData.description} />
      </Main>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 1149px;
  min-height: 408px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 29px 31px 25px 24px;
`;
const Titles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 23px;
  border-bottom: 1px solid #efedea;
`;
const Main = styled.div`
  padding-top: 32px;
  min-height: 154px;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
const DateFontcaption1SB = styled.div`
  text-align: right;
  color: #c2c0bd;
`;
const SolutionUserInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
