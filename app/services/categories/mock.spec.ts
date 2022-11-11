import { describe, expect, it } from 'vitest';
import type { Category } from './interface';
import { mockCategoryService } from './mock';

describe('Mock Categories Service', () => {
  it('should return two categories', async () => {
    const categories = await mockCategoryService.getMainCategories();
    expect(categories).not.toBeUndefined();
    expect(categories).not.toBeNull();
    expect(categories).toHaveLength(2);
  });

  it('should return sub categories of the first one', async () => {
    const categories = await mockCategoryService.getMainCategories();
    const subCategories = await mockCategoryService.getSubCategories(
      categories[0]
    );
    expect(subCategories).not.toBeUndefined();
    expect(subCategories).not.toBeNull();
    expect(subCategories).not.toHaveLength(0);
  });

  it('should return sub categories of the second one', async () => {
    const categories = await mockCategoryService.getMainCategories();
    const subCategories = await mockCategoryService.getSubCategories(
      categories[1]
    );
    expect(subCategories).not.toBeUndefined();
    expect(subCategories).not.toBeNull();
    expect(subCategories).not.toHaveLength(0);
  });

  it('should return empty category of the others', async () => {
    const category: Category = {
      id: 0,
      name: '기타',
      color: 'linear-gradient(270deg, #E09D1A -7.94%, #D72D2D 108.73%)',
    };
    const subCategories = await mockCategoryService.getSubCategories(category);
    expect(subCategories).not.toBeUndefined();
    expect(subCategories).not.toBeNull();
    expect(subCategories).toHaveLength(0);
  });
});
