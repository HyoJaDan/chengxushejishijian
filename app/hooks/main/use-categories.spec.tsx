import { renderHook, waitFor } from '@testing-library/react';
import type { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { describe, it } from 'vitest';
import { mockCategoryService } from '~/services/categories/mock';
import { useCategories } from './use-categories';

describe('useCategoriesQuery', () => {
  const queryClient = new QueryClient();
  const wrapper: FC<PropsWithChildren> = ({ children }) => (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );
  it('should return mock categories', async () => {
    const mockCategories = await mockCategoryService.getCategories();
    const { result } = renderHook(() => useCategories(), {
      wrapper,
    });
    await waitFor(() => expect(result.current).toEqual(mockCategories));
  });
});
