import axios from 'axios';
import { selectorFamily } from 'recoil';

export const getLessonDetail = selectorFamily({
  key: 'getLessonDetail',
  get: (id) => async () => {
    const lessonDetail = await axios
      .get(`https://api.thepool.kr/api/lessons/${id}`)
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
      .get(`https://api.thepool.kr/api/lessons/${id}/hashtags`)
      .then((response) => {
        return response.data.lessonHashtags;
      })
      .catch(() => {
        return false;
      });
    return lessonDetail;
  },
});
