import styled from 'styled-components';
import type { FCClass } from '~/components/common/types/function-component';
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
    <Wrapper id='category-side-bar' className={className}>
      {mainCategoriesChildren}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
