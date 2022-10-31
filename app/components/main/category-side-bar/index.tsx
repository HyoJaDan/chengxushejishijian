import styled from 'styled-components';
import type { FCClass } from '~/components/common/types/function-component';
import { SelectedSubCategoryProvider } from '~/contexts/main/selected-sub-category';
import { useMainCategories } from '~/hooks/main/use-categories';
import { MainCategoryMenu } from './main-category-menu';

export const CategorySideBar: FCClass = ({ className }) => {
  const categories = useMainCategories();

  const mainCategoriesChildren = categories.map((category) => (
    <MainCategoryMenu
      key={`main-category-${category.id}`}
      mainCategory={category}
    />
  ));

  return (
    <Wrapper className={className}>
      <SelectedSubCategoryProvider>
        {...mainCategoriesChildren}
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
