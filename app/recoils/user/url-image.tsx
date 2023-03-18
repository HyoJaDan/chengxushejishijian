import axios from 'axios';
import { selector } from 'recoil';

export interface IURLImage {
  createdAt: string;
  deletedAt: string | null;
  iconPath: string;
  iconUrl: string;
  id: number;
  name: 'string';
  updatedAt: string;
}

export const getURLImage = selector<IURLImage[]>({
  key: 'URLImage',
  get: async () => {
    const getUrlImg = await axios
      .get('https://api.thepool.kr/api/member-social-links')
      .then((res) => {
        console.log(res.data.memberSocialLinks);
        return res.data.memberSocialLinks;
      });
    return getUrlImg;
  },
});
