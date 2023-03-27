export interface ILessonHashTags {
  lessonHashtags: [
    {
      id: number;
      lessonId: number;
      lessonHashtagId: number;
      createdAt: string;
      lessonHashtag: {
        id: number;
        tag: string;
        createdAt: string;
      };
    }
  ];
}
