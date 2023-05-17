import type { IMember } from '~/models/member';

export interface ISolutionDetail {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  title: string;
  description: string;
  member: IMember;
  isLike: boolean;
  id: number;
  lessonId: number;
  relatedLink: string;
}
