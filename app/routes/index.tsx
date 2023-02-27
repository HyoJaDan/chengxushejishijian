import styled from 'styled-components';
import { Banner } from '~/components/main/banner';
import { CategorySideBar } from '~/components/main/category-side-bar';
import { MainContent } from '~/components/main/main-content';

export default function Index() {
  return null;
  /* <MainWrapper>
      <GridWrapper>
        <TopBanner />
        <SideBar>
          <StickyCategory />
        </SideBar>
        <MainContentArea />
      </GridWrapper>
    </MainWrapper> */
}
const MainWrapper = styled.div`
  height: 100%;
  overflow-x: auto;
  padding-top: 44px;
`;
const GridWrapper = styled.div`
  --main-page-margin: 172px;
  display: grid;
  width: min(100%, 1200px);
  margin: 0 auto;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 24px;
  row-gap: 64px;
  min-height: 100%;
  position: relative;
`;

const SideBar = styled.aside`
  grid-column: 1 / 3;
  position: relative;
`;

const StickyCategory = styled(CategorySideBar)`
  position: sticky;
  top: 0;
`;

const TopBanner = styled(Banner)`
  grid-column: 1 / -1;
`;

const MainContentArea = styled(MainContent)`
  grid-column: 3 / -1;
`;
