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
  { id: 1, name: '백엔드 개발' },
  { id: 2, name: '웹 프론트엔드' },
  { id: 3, name: 'Android' },
  { id: 4, name: 'IOS' },
  { id: 5, name: '기타 개발' },
  { id: 6, name: '웹 디자인' },
  { id: 7, name: 'UI/UX' },
  { id: 8, name: 'BX' },
  { id: 9, name: '기타 디자인' },
];
