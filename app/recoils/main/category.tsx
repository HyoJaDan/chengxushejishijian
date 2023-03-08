import axios from 'axios';
import { atom, selectorFamily } from 'recoil';

export const categoryId = atom<string>({
  key: 'category-id',
  default: 'lessonSolutions',
});

export const getLessons = selectorFamily({
  key: 'getLesson',
  get: (id: string) => async () => {
    const userData = await axios
      .get(`https://api.thepool.kr/api/lessons?sortBy=${id}`)
      .then((response) => {
        return response.data.lessons;
      })
      .catch(() => {
        return false;
      });
    return userData;
  },
});
