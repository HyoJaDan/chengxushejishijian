import { act, renderHook, waitFor } from '@testing-library/react';
import type { FC, PropsWithChildren } from 'react';
import { describe, it } from 'vitest';
import type { Category } from '~/services/categories/interface';
import {
  defaultSelectedSubCategory,
  SelectedSubCategoryProvider,
  useSelectedSubCategory,
} from './selected-sub-category';

describe('useSelectedSubCategory', () => {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <SelectedSubCategoryProvider>{children}</SelectedSubCategoryProvider>
  );

  it('should return default sub category at first', async () => {
    const { result } = renderHook(() => useSelectedSubCategory(), {
      wrapper: Wrapper,
    });
    await waitFor(() =>
      expect(result.current.selectedSubCategory).toEqual(
        defaultSelectedSubCategory
      )
    );
  });

  it('can initialize the category only once', async () => {
    const { result } = renderHook(() => useSelectedSubCategory(), {
      wrapper: Wrapper,
    });
    const category: Category = {
      id: 11,
      name: 'ui/ux',
    };

    act(() => result.current.initialize(category));

    await waitFor(() =>
      expect(result.current.selectedSubCategory).toEqual(category)
    );

    act(() =>
      result.current.initialize({
        ...category,
        id: 1222,
      })
    );

    await waitFor(() =>
      expect(result.current.selectedSubCategory).toEqual(category)
    );
  });

  it('can change the category multiple times', async () => {
    const { result } = renderHook(() => useSelectedSubCategory(), {
      wrapper: Wrapper,
    });
    let category: Category = {
      id: 11,
      name: 'ui/ux',
    };

    act(() => result.current.setSelectedSubCategory(category));

    await waitFor(() =>
      expect(result.current.selectedSubCategory).toEqual(category)
    );

    category = {
      ...category,
      id: 222,
    };

    act(() => result.current.setSelectedSubCategory(category));

    await waitFor(() =>
      expect(result.current.selectedSubCategory).toEqual(category)
    );
  });
});
