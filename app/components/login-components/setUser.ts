import axios from 'axios';

type ISuccess = [string, number];
type IFail = [string];
type IResponse = ISuccess | IFail;

export async function setUser(
  OAuthresponse: string,
  platform: number
): Promise<IResponse> {
  try {
    const response = await axios.post(
      'https://api.thepool.kr/api/members/social',
      {
        accessToken: OAuthresponse,
        oAuthAgency: platform,
      }
    );
    return [response.data.token, response.data.status];
  } catch (error) {
    return [`${error}`];
  }
}
