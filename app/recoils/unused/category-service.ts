import { atom } from 'recoil';
import type { CategoryService } from '~/services/categories/interface';
import { mockCategoryService } from '~/services/categories/mock';
import { recoilKeySuffix } from '~/utils/recoil-key';

export const categoryServiceAtom = atom<CategoryService>({
  key: `categoryServiceAtom${recoilKeySuffix}`,
  default:
    process.env.NODE_ENV === 'development'
      ? mockCategoryService
      : mockCategoryService,
});
