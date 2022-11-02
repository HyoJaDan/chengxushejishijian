import { describe, it } from 'vitest';
import { mockCategoryService } from '~/services/categories/mock';
import '../../__test__/setupTests';

describe('MSW handlers', () => {
  it('should return same data with mock service', async () => {
    const response = await fetch('http://localhost:3000/categories');
    const data = await response.json();
    const mockData = await mockCategoryService.getMainCategories();
    expect(data).toEqual(mockData);
  });
});
