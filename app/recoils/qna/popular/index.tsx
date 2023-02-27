import axios from 'axios';
import { atom, selector } from 'recoil';
import type { popularQuestionType } from '~/services/qna/interface';
import { mockPopularQnA } from '~/services/qna/mock-popularQnA';
import { recoilKeySuffix } from '~/utils/recoil-key';

const RealContent = selector<popularQuestionType>({
  key: 'RealQnAContent',
  get: async ({ get }) => {
    const data = await axios
      .get(`https://api.thepool.kr/api/questions/popularcategories`)
      .then((response) => {
        return response.data.json();
      });
    return data;
  },
});
export const popularContent = atom<popularQuestionType>({
  key: 'QnAContent',
  default:
    process.env.NODE_ENV === 'development' ? mockPopularQnA : mockPopularQnA,
});
export const popularContentSelector = selector({
  key: `popularContentSelector${recoilKeySuffix}`,
  get: ({ get }) => {
    return get(popularContent).contents();
  },
});
