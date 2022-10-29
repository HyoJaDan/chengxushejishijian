import { renderHook, waitFor } from '@testing-library/react';
import type { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { describe, it } from 'vitest';
import { mockCategoryService } from '~/services/categories/mock';
import { useSubCategories } from './use-sub-categories';

describe('useSubCategories', () => {
  const queryClient = new QueryClient();
  const wrapper: FC<PropsWithChildren> = ({ children }) => (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );

  it('should return mock sub categories for 디자인', async () => {
    const design = (await mockCategoryService.getCategories()).filter(
      (category) => category.name === '디자인'
    )[0];
    const expected = await mockCategoryService.getSubCategories(design);
    const { result } = renderHook(() => useSubCategories(design), { wrapper });
    await waitFor(() => expect(result.current).toEqual(expected));
  });

  it('should return mock sub categories for 개발', async () => {
    const develop = (await mockCategoryService.getCategories()).filter(
      (category) => category.name === '개발'
    )[0];
    const expected = await mockCategoryService.getSubCategories(develop);
    const { result } = renderHook(() => useSubCategories(develop), { wrapper });
    await waitFor(() => expect(result.current).toEqual(expected));
  });
});
