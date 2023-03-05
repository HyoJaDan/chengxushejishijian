import axios from 'axios';

interface IResponseData {
  member: {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    majorId: number;
    account: string;
    nickname: string;
    memberName: string;
    job: string;
    status: number;
    loginType: number;
    thumbnail: string;
    introduce: string;
  };
  accessToken: string;
}
type ISuccess = [boolean, IResponseData];
type IFail = [boolean];
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
    return [true, response.data];
  } catch (error) {
    return [false];
  }
}
