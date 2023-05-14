export const endpointBase = 'https://api.thepool.kr';

const SubmitEndpointBase = `${endpointBase}/assignments/submits`;
export const SubmitEndpoint = {
  hot: `${SubmitEndpointBase}/hot`,
  random: `${SubmitEndpointBase}/random`,
};

const AssignmentEndpointBase = `${endpointBase}/assignments`;
export const AssingmentEndpoint = {
  random: `${AssignmentEndpointBase}/random`,
};
/* .get(`https://api.thepool.kr/api/lessons?sortBy=${sortBy}`) */

/** 유저의 정보을 가져온다. https://api.thepool.kr/api/members */
export const memberDataAdress = `${endpointBase}/api/members`;

/** 유저의 팔로우를 관리한다 */
const friendships = `${endpointBase}/api/member-friendship`;
export const manageFollowesAddress = {
  follow: `${friendships}/followers`,
  following: `${friendships}/followings`,
};

/** https://api.thepool.kr/api/lessons : 과제를 담당한다. */
export const lessonAddress = `${endpointBase}/api/lessons`;

/** https://api.thepool.kr/api/solutions : 풀이를 담당한다. */
export const solutionAddress = `${endpointBase}/api/solutions`;
