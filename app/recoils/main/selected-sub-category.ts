import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import type { Category } from '~/services/categories/interface';
import { recoilKeySuffix } from '~/utils/recoil-key';

export const selectedCategoryState = atom<Category | undefined>({
  key: `selectedSubcategoryState${recoilKeySuffix}`,
  default: undefined,
});

export function useSelectedCategory() {
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  function useInitializeOnce(category?: Category) {
    useEffect(() => {
      selectedCategory ?? setSelectedCategory(category);
    });
  }

  return {
    selectedCategory,
    setSelectedCategory,
    useInitializeOnce,
  };
}
