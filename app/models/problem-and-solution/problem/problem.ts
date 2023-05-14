import type { IMember } from '../../member';
import type { ILessonLevel } from '../common-used/lesson-level';
import type { IProblemCategory } from '../common-used/problem-category';

export interface IProblem {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  title: string;
  description: string;
  hit: number;
  member: IMember;
  lessonCategory: IProblemCategory;
  lessonLevel: ILessonLevel;
  isBookmark: boolean;
  isLike: boolean;
}
