const endpointBase = 'https://api.thepool.kr';
const SubmitEndpointBase = `${endpointBase}/assignments/submits`;
export const SubmitEndpoint = {
  hot: `${SubmitEndpointBase}/hot`,
  random: `${SubmitEndpointBase}/random`,
};

const AssignmentEndpointBase = `${endpointBase}/assignments`;
export const AssingmentEndpoint = {
  random: `${AssignmentEndpointBase}/random`,
};
