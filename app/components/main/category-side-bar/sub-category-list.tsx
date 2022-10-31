import type { FC } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelectedSubCategory } from '~/contexts/main/selected-sub-category';
import type { Category } from '~/services/categories/interface';

type SubCategoriesProps = {
  subCategories: Category[];
};

export const SubCategoryList: FC<SubCategoriesProps> = ({ subCategories }) => {
  const { selectedSubCategory, setSelectedSubCategory, initialize } =
    useSelectedSubCategory();

  useEffect(() => {
    if (subCategories.length > 0) {
      initialize(subCategories[0]);
    }
  }, [subCategories, initialize]);

  return (
    <Wrapper>
      {subCategories.map((subCategory) => (
        <CategoryButton
          key={`sub-category-${subCategory.id}`}
          selected={selectedSubCategory.id === subCategory.id}
          onClick={() => setSelectedSubCategory(subCategory)}
        >
          {subCategory.name}
        </CategoryButton>
      ))}
    </Wrapper>
  );
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
