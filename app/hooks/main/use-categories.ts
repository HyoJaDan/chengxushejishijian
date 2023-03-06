import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { categoryServiceAtom } from '~/recoils/unused/category-service';
import type { MainCategory } from '~/services/categories/interface';

export function useMainCategories(): MainCategory[] {
  const categoryService = useRecoilValue(categoryServiceAtom);
  const categories = useQuery('categories', categoryService.getMainCategories);
  return categories.data ?? [];
}
