import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { categoryServiceAtom } from '~/recoils/unused/category-service';
import type { Category, MainCategory } from '~/services/categories/interface';

export function useSubCategories(category: MainCategory): Category[] {
  const categoryService = useRecoilValue(categoryServiceAtom);
  const subCategories = useQuery(`subcategory-${category.id}`, () =>
    categoryService.getSubCategories(category)
  );

  return subCategories.data ?? [];
}
