import type { popularQuestionType } from './interface';

export const mockPopularQnA: popularQuestionType = {
  contents: async () => [
    {
      content:
        '질문 내용 미리보기입니다. 대략적으로는 공백 포함 100byte 이상일 경우 미리보기에서 보이는 글자 수를 넘어갑니다. 글이 길어질 경우 이렇게 하단에 화이트 그라디언트 처리가 됩니다. 질문 내용 미리보기입니다.',
      title: 'question title',
      tags: ['태그_1', '태그_2', '태그_3'],
      numOfAnswers: 12,
      nickName: '전성호',
      views: 13,
      date: 2021.01,
      rank: 1,
    },
    {
      content:
        '질문 내용 미리보기입니다. 대략적으로는 공백 포함 100byte 이상일 경우 미리보기에서 보이는 글자 수를 넘어갑니다. 글이 길어질 경우 이렇게 하단에 화이트 그라디언트 처리가 됩니다. 질문 내용 미리보기입니다.',
      title: 'question title',
      tags: ['태그 1', '태그 2', '태그 3'],
      numOfAnswers: 1,
      nickName: '전성호',
      views: 1,
      date: 2021.02,
      rank: 2,
    },
    {
      content:
        '질문 내용 미리보기입니다. 대략적으로는 공백 포함 100byte 이상일 경우 미리보기에서 보이는 글자 수를 넘어갑니다. 글이 길어질 경우 이렇게 하단에 화이트 그라디언트 처리가 됩니다. 질문 내용 미리보기입니다.',
      title: 'question title',
      tags: ['태그 1', '태그 2', '태그 3'],
      numOfAnswers: 1,
      nickName: '전성호',
      views: 35,
      date: 2021.06,
      rank: 3,
    },
    {
      content:
        '질문 내용 미리보기입니다. 대략적으로는 공백 포함 100byte 이상일 경우 미리보기에서 보이는 글자 수를 넘어갑니다. 글이 길어질 경우 이렇게 하단에 화이트 그라디언트 처리가 됩니다. 질문 내용 미리보기입니다.',
      title: 'question title',
      tags: ['태그 1', '태그 2', '태그 3'],
      numOfAnswers: 6,
      nickName: '전성호',
      views: 5,
      date: 2021.03,
      rank: 4,
    },
  ],
};
