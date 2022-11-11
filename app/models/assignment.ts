import type { Category } from '~/services/categories/interface';

export type Assignment = {
  id: number;
  title: string;
  author: string;
  shortDescription: string;
  createdAt: number;
  updatedAt?: number;
  category: Category;
};
