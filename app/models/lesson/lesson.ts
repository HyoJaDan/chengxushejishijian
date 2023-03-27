import type { ILessonCategory } from './lesson-category';
import type { IMember } from './member';

export interface ILesson {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  title: string;
  description: string;
  hit: number;
  member: IMember;
  lessonCategory: ILessonCategory;
  lessonLevel: {
    id: number;
    createdAt: string;
    level: string;
  };
  isBookmark: boolean;
  isLike: boolean;
}
