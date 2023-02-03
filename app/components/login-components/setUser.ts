import axios from 'axios';

type ISuccess = [boolean, string, number?, number?];
type IFail = [string];
type IResponse = ISuccess | IFail;

export async function setUser(
  OAuthresponse: string,
  platform: number
): Promise<IResponse> {
  try {
    const response = await axios.post('https://api.thepool.kr/api/members', {
      oAuthToken: OAuthresponse,
      loginType: platform,
    });
    return [
      true,
      response.data.accessToken,
      response.data.member.status,
      response.data.member.id,
    ];
  } catch (error) {
    return [false, `${error}`];
  }
}
