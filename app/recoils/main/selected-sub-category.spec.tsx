import { act, renderHook, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { describe, it } from 'vitest';
import type { Category } from '~/services/categories/interface';
import { useSelectedCategory } from './selected-sub-category';

describe('useSelectedCategory', () => {
  it('returns undefined at first', () => {
    const { result } = renderHook(() => useSelectedCategory(), {
      wrapper: RecoilRoot,
    });
    expect(result.current.selectedCategory).toBeUndefined();
  });

  it('can set selected category', async () => {
    const { result } = renderHook(() => useSelectedCategory(), {
      wrapper: RecoilRoot,
    });
    const category: Category = {
      id: 1,
      name: 'category',
    };
    act(() => result.current.setSelectedCategory(category));
    await waitFor(() => {
      expect(result.current.selectedCategory).toEqual(category);
    });
  });

  it('can initialize', async () => {
    const { result } = renderHook(() => useSelectedCategory(), {
      wrapper: RecoilRoot,
    });
    const category: Category = {
      id: 1,
      name: 'category',
    };
    act(() => {
      renderHook(() => result.current.useInitializeOnce(category));
    });
    await waitFor(() => {
      expect(result.current.selectedCategory).toEqual(category);
    });
  });

  it('can initialize only once', async () => {
    const { result } = renderHook(() => useSelectedCategory(), {
      wrapper: RecoilRoot,
    });
    const category: Category = {
      id: 1,
      name: 'category',
    };
    act(() => {
      renderHook(() => result.current.useInitializeOnce(category));
    });
    const category2: Category = {
      id: 2,
      name: 'category',
    };
    act(() => {
      renderHook(() => result.current.useInitializeOnce(category2));
    });
    await waitFor(() => {
      expect(result.current.selectedCategory).not.toEqual(category2);
    });
  });
});
