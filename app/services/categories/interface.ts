export interface CategoryService {
  getCategories(): Promise<Required<Category>[]>;
  getSubCategories(category: Category): Promise<Category[]>;
}

export type Category = {
  id: number;
  name: string;
  color?: string;
};
