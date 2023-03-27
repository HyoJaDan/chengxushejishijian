import type { ILessonCategory } from './lesson-category';
import type { IMember } from './member';

export interface ILessons {
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
  lessonCategory: ILessonCategory;
  _count: {
    lessonComments: number;
    lessonLikes: number;
    lessonSolutions: number;
  };
}
