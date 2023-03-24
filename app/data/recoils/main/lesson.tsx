import axios from 'axios';
import { selectorFamily } from 'recoil';
import { lessonAddress } from '~/data/constants/adress';
import { userAccessToken } from '../user/common/login-information';

export const getLessonDetail = selectorFamily({
  key: 'getLessonDetail',
  get:
    (id) =>
    async ({ get }) => {
      const token = get(userAccessToken);
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
export const getLessonDetailTags = selectorFamily({
  key: 'getLessonDetailTags',
  get: (id) => async () => {
    const lessonDetail = await axios
      .get(`${lessonAddress}/${id}/hashtags`)
      .then((response) => {
        return response.data.lessonHashtags;
      })
      .catch(() => {
        return false;
      });
    return lessonDetail;
  },
});
