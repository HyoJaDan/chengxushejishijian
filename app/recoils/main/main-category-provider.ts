import { atom } from 'recoil';
import type { Category } from '~/services/categories/interface';
import { recoilKeySuffix } from '~/utils/recoil-key';

export const mainCategoryProvider = atom<Required<Category>>({
  key: `mainCategoryProvider${recoilKeySuffix}`,
  default: {
    id: 0,
    name: '',
    color: '',
  },
});
