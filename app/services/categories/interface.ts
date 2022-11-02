export interface CategoryService {
  getMainCategories(): Promise<MainCategory[]>;
  getSubCategories(category: Category): Promise<Category[]>;
}

export type Category = {
  id: number;
  name: string;
  color?: string;
};

export type MainCategory = Required<Category>;
