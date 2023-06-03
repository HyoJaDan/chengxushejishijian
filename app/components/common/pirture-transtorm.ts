import axios from 'axios';

export const pictureTranstorm = async (image, accessToken) => {
  const formData = new FormData();
  formData.append('data', image);
  const temp = await axios({
    method: 'post',
    url: ' https://api.thepool.kr/uploads/post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return temp.data.url;
};
