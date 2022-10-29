import type { FC } from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useSelectedSubCategory } from '~/contexts/main/selected-sub-category';
import { useSubCategories } from '~/hooks/main/use-sub-categories';
import { mainCategoryProvider } from '~/recoils/main/main-category-provider';

export const CategoryMenu: FC = () => {
  const category = useRecoilValue(mainCategoryProvider);
  const subCategories = useSubCategories(category);
  const { selectedSubCategory, setSelectedSubCategory, initialize } =
    useSelectedSubCategory();

  const subCategoryChildren = subCategories.map((subCategory) => (
    <CategoryButton
      key={`sub-category-${subCategory.id}`}
      selected={selectedSubCategory.id === subCategory.id}
      onClick={() => setSelectedSubCategory(subCategory)}
    >
      {subCategory.name}
    </CategoryButton>
  ));

  useEffect(() => {
    if (subCategories.length > 0) {
      initialize(subCategories[0]);
    }
  }, [subCategories, initialize]);

  return (
    <Wrapper>
      <CategoryHeader background={category.color}>
        {category.name}
      </CategoryHeader>
      {...subCategoryChildren}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  --menu-gap: 8px;
  --header-bottom-margin: 24px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: flex-start;
  gap: var(--menu-gap);
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
  &:first-of-type {
    margin-top: calc(var(--header-bottom-margin) - var(--menu-gap));
  }
  ${({ selected }) =>
    selected &&
    `
  background: #2478f6;
  border-color: transparent; 
  color: white;
  `}
`;
