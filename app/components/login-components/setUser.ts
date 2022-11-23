import axios from 'axios';

export async function setUser(OAuthresponse: string, platform: number) {
  try {
    const response = await axios.post(
      'https://api.thepool.kr/api/member/social',
      {
        accessToken: OAuthresponse,
        oAuthAgency: platform,
      }
    );
    console.log('백엔드에 연동 완료', response);
    return [response.data.token, response.data.status];
  } catch (error) {
    console.error(error);
    return error;
  }
}
