import axios from 'axios';
import { selectorFamily } from 'recoil';
import { lessonAddress } from '~/data/constants/adress';
import type { IProblemHashTags } from '~/models/hashtags';
import type { IProblem } from '~/models/problem-and-solution/problem/problem';
import { myAccessToken } from '../user/common/login-information';

export const getProblemDetail = selectorFamily<IProblem, string | undefined>({
  key: 'getProblemDetail',
  get:
    (id) =>
    async ({ get }) => {
      const token = get(myAccessToken);
      if (id === null) {
        const lessonDetail = await axios
          .get(`${lessonAddress}/${id}`)
          .then((response) => {
            return response.data.lesson;
          })
          .catch(() => {
            return false;
          });
        return lessonDetail;
      }
      const lessonDetail = await axios
        .get(`${lessonAddress}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          return response.data.lesson;
        })
        .catch(() => {
          return false;
        });
      return lessonDetail;
    },
});
export const getProblemDetailTags = selectorFamily<IProblemHashTags, string>({
  key: 'getProblemDetailTags',
  get: (id) => async () => {
    const lessonDetail = await axios
      .get(`${lessonAddress}/${id}/hashtags`)
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return false;
      });
    return lessonDetail;
  },
});
