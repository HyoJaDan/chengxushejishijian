import styled from 'styled-components';
import { Banner } from '~/components/main/banner';
import { CategorySideBar } from '~/components/main/category-side-bar';

export default function HomePage() {
  return (
    <MainWrapper>
      <GridWrapper>
        <TopBanner />
        <CategorySideBar />
        <MainContent>메인 컨텐츠.</MainContent>
      </GridWrapper>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  height: 100px;
`;
const GridWrapper = styled.div`
  --main-page-margin: 172px;
  display: grid;
  width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 260px 1fr;
  column-gap: 24px;
  row-gap: 64px;
  min-height: 100%;
`;

const TopBanner = styled(Banner)`
  grid-column: 1 / -1;
`;

const MainContent = styled.main`
  grid-column: 3 / -1;
  background-color: green;
`;
