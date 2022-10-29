import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { categoryServiceAtom } from '~/recoils/main/category-service';
import type { Category } from '~/services/categories/interface';

export function useSubCategories(category: Category) {
  const categoryService = useRecoilValue(categoryServiceAtom);
  const subCategories = useQuery(`subcategory-${category.id}`, () =>
    categoryService.getSubCategories(category)
  );

  return subCategories.data ?? [];
}

export function useInitSubCategoryEffect() {}
