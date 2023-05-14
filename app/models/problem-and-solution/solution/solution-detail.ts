import type { IMember } from '~/models/member';
import type { ILessonLevel } from '../common-used/lesson-level';
import type { IProblemCategory } from '../common-used/problem-category';

export interface ISolutionDetail {
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
  id: number;
  thumbnail: string;
}
