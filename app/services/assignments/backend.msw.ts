/* eslint-disable import/no-extraneous-dependencies */
import type { RestHandler } from 'msw';
import { rest } from 'msw';
import { AssingmentEndpoint } from '~/constants/endpoint';
import type { Assignment } from '~/models/assignment';

export const mockRandomAssignmentsResult: Assignment = {
  id: 1,
  title: '대시보드',
  author: '뚝딱뚝딱',
  category: {
    id: 11,
    name: 'UI/UX',
  },
  shortDescription: '대시보드를 만들어주세요',
  createdAt: Date.now(),
  numSubmit: 87,
};

export const assignmentHandlers: RestHandler[] = [
  rest.get(AssingmentEndpoint.random, async (req, res, ctx) =>
    res(ctx.status(200), ctx.json<Assignment>(mockRandomAssignmentsResult))
  ),
];
