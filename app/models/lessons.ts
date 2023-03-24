export interface ILesson {
  id: number;
  memberId: number;
  levelId: number;
  categoryId: number;
  createdAt: string;
  deletedAt: string | null;
  description: string;
  hit: number;
  thumbnail: string;
  title: string;
  updatedAt: string;
  member: {
    account: string;
    createdAt: string;
    deletedAt: string | null;
    id: number;
    introduce: string;
    job: string;
    loginType: number;
    majorId: number | null;
    memberName: string;
    nickname: string;
    status: number;
    thumbnail: string;
    updatedAt: string;
  };
  lessonCategory: {
    createdAt: string;
    id: number;
    name: string;
  };
  _count: {
    lessonComments: number;
    lessonLikes: number;
    lessonSolutions: number;
  };
}
