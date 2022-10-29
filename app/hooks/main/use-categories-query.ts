import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { categoryServiceAtom } from '~/recoils/main/category-service';

export function useCategories() {
  const categoryService = useRecoilValue(categoryServiceAtom);
  const categories = useQuery('categories', categoryService.getCategories);
  return categories.data ?? [];
}
