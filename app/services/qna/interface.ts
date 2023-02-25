export interface newQuestionType {
  Idx: number;
  contents(): Promise<newQnA[]>;
}
export interface popularQuestionType {
  contents(): Promise<popularQnA[]>;
}

export type popularQnA = Omit<content, 'area'>;
export type newQnA = Omit<content, 'content' | 'rank'>;

export interface content {
  area: number; // qna에서만
  content: string; // popular에서만
  title: string;
  tags: string[];
  numOfAnswers: number;
  nickName: string;
  views: number;
  rank: number;
  /* date: Date; */
}
