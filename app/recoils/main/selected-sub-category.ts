import { atom } from 'recoil';
import type { Category } from '~/services/categories/interface';
import { recoilKeySuffix } from '~/utils/recoil-key';

export const selectedCategoryState = atom<Category | undefined>({
  key: `selectedSubcategoryState${recoilKeySuffix}`,
  default: undefined,
});
