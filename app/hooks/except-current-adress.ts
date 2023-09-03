import type { IProblems } from '~/models/problem-and-solution/problem/problems';
import type { ISolutions } from '~/models/solutions';

export const exceptCurrentAdress = (
  problems: IProblems[] | ISolutions[],
  paramsId: number
) => {
  const intId = Number(paramsId);
  const result = problems.filter((data: { id: number }) => data.id !== intId);
  return result;
};
