import type { FC } from 'react';
import styled from 'styled-components';
import { useSubCategories } from '~/hooks/main/use-sub-categories';
import type { MainCategory } from '~/services/categories/interface';
import { SubCategoryList } from './sub-category-list';

type MainCategoryProps = {
  mainCategory: MainCategory;
};

export const MainCategoryMenu: FC<MainCategoryProps> = ({ mainCategory }) => {
  const subCategories = useSubCategories(mainCategory);
  return (
    <Wrapper>
      <CategoryHeader background={mainCategory.color}>
        {mainCategory.name}
      </CategoryHeader>
      <SubCategoryList subCategories={subCategories} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --menu-gap: 8px;
  --header-bottom-margin: 24px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: flex-start;
  gap: var(--header-bottom-margin);
`;

const CategoryHeader = styled.h3<{ background: string }>`
  background: ${({ background }) => background};
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  font-weight: 700;
  font-size: 24px;
  color: transparent;
  margin: 0;
`;
