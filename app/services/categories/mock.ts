import type { CategoryService } from './interface';

export const mockCategoryService: CategoryService = {
  getMainCategories: async () => [
    {
      id: 1,
      name: '디자인',
      color: 'linear-gradient(270deg, #421AE0 -7.94%, #3DA7BE 108.73%)',
    },
    {
      id: 2,
      name: '개발',
      color: 'linear-gradient(270deg, #E09D1A -7.94%, #D72D2D 108.73%)',
    },
  ],
  getSubCategories: async (category) =>
    [
      [
        { id: 11, name: 'UX/UI' },
        { id: 12, name: '브랜딩' },
        { id: 13, name: '기타디자인' },
      ],
      [
        { id: 21, name: '백엔드' },
        { id: 22, name: '안드로이드' },
        { id: 23, name: 'iOS' },
        { id: 24, name: 'Web' },
        { id: 25, name: '기타개발' },
      ],
    ][category.id - 1] ?? [],
};
