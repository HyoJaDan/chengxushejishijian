export interface ILessonLevel {
  id: number;
  createdAt: string;
  level: string;
}
type Data = {
  id: number;
  name: string;
};

export const categoryList: Data[] = [
  { id: 1, name: '后端开发' },
  { id: 2, name: '前端开发' },
  { id: 3, name: 'Android' },
  { id: 4, name: 'IOS' },
  { id: 5, name: '其他开发' },
];
