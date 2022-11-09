import type { FC } from 'react';
import styled from 'styled-components';
import { useSelectedCategory } from '~/hooks/main/use-selected-category';
import type { Category } from '~/services/categories/interface';

type SubCategoriesProps = {
  subCategories: Category[];
};

export const SubCategoryList: FC<SubCategoriesProps> = ({ subCategories }) => {
  const { selectedCategory, setSelectedCategory, useInitializeOnce } =
    useSelectedCategory();

  useInitializeOnce(subCategories[0]);

  const subCategoryButtons = subCategories.map((subCategory) => (
    <CategoryButton
      key={`sub-category-${subCategory.id}`}
      selected={selectedCategory?.id === subCategory.id}
      onClick={() => setSelectedCategory(subCategory)}
    >
      {subCategory.name}
    </CategoryButton>
  ));

  return <Wrapper>{subCategoryButtons}</Wrapper>;
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: var(--menu-gap);
`;

const CategoryButton = styled.li.attrs({
  role: 'button',
})<{ selected: boolean }>`
  height: 38px;
  display: grid;
  place-content: center;
  padding: 12px;
  border: 1px solid #6d6d6d;
  border-radius: 4px;
  color: #6d6d6d;
  ${({ selected }) =>
    selected &&
    `
  background: #2478f6;
  border-color: transparent; 
  color: white;
  `}
`;
