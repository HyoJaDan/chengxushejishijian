import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { selectedCategoryState } from '~/recoils/main/selected-sub-category';
import type { Category } from '~/services/categories/interface';

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
