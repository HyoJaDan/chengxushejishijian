/* eslint-disable no-param-reassign */
import { atom } from 'recoil';

export interface IQuestionCategories {
  id: number;
  name: string;
  createdAt?: string;
  isSelected: boolean;
}
export const questionCategories = atom<IQuestionCategories[]>({
  key: 'questionCategories',
  default: [{ id: 0, name: '전체', isSelected: true }],
});
