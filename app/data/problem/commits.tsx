import axios from 'axios';
import { atom, selectorFamily } from 'recoil';
import type { IComments } from '~/models/problem-and-solution/problem/comments';
import { lessonAddress } from '../constants/adress';
import { myAccessToken } from '../user/common/login-information';

export const commentAtom = atom<IComments[]>({
  key: 'commentAtom',
  default: [],
});

export const getComments = selectorFamily<IComments[], string>({
  key: 'getComments',
  get:
    (id) =>
    async ({ get }) => {
      const token = get(myAccessToken);
      const comments = await axios
        .get(`${lessonAddress}/${id}/comments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          return response.data.lessonComments;
        })
        .catch(() => {
          return false;
        });
      return comments;
    },
});
