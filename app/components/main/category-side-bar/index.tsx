import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import { SelectedSubCategoryProvider } from '~/contexts/main/selected-sub-category';
import { useCategories } from '~/hooks/main/use-categories-query';
import { mainCategoryProvider } from '~/recoils/main/main-category-provider';
import { CategoryMenu } from './menu';

export const CategorySideBar = () => {
  const categories = useCategories();
  return (
    <Wrapper>
      <SelectedSubCategoryProvider>
        {categories.map((category) => (
          <RecoilRoot
            key={`main-category-${category.id}`}
            initializeState={(snapshot) => {
              snapshot.set(mainCategoryProvider, category);
            }}
          >
            <CategoryMenu />
          </RecoilRoot>
        ))}
      </SelectedSubCategoryProvider>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
