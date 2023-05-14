import type { IMember } from '../member';
import type { IProblemCategory } from './problem-category';

export interface IProblem {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  title: string;
  description: string;
  hit: number;
  member: IMember;
  lessonCategory: IProblemCategory;
  lessonLevel: {
    id: number;
    createdAt: string;
    level: string;
  };
  isBookmark: boolean;
  isLike: boolean;
}
