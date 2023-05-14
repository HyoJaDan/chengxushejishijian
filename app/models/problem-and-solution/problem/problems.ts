import type { IMember } from '../../member';
import type { IProblemCategory } from '../common-used/problem-category';

export interface IProblems {
  id: number;
  memberId: number;
  levelId: number;
  categoryId: number;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string;
  description: string;
  hit: number;
  thumbnail: string;
  title: string;
  member: IMember;
  lessonCategory: IProblemCategory;
  _count: {
    lessonComments: number;
    lessonLikes: number;
    lessonSolutions: number;
  };
}
