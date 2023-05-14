import type { IMember } from '../member';
import type { IProblemCategory } from './problem-category';

export interface IComments {
  createdAt: string;
  deletedAt: string;
  description: string;
  id: number;
  lessonId: number;
  updatedAt: string;
  memberId: number;
  member: IMember & { major: IProblemCategory };
}
