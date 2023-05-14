import type { IMember } from '../../member';

export interface ISolutions {
  id: number;
  createdAt: string;
  deletedAt: string | null;
  description: string;
  lessonId: number;
  member: IMember;
  memberId: number;
  relatedLink: string;
  updatedAt: string;
  _count: {
    lessonSolutionLikes: number;
    lessonSolutionComments: number;
  };
}
