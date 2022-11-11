/* eslint-disable import/no-extraneous-dependencies */
import type { RestHandler } from 'msw';
import { rest } from 'msw';
import type { MainCategory } from '~/services/categories/interface';
import { submitBackendHandlers } from '../submits/backend.msw';

const categoryHandlers: RestHandler[] = [
  rest.get('http://localhost:3000/categories', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json<MainCategory[]>([
        {
          id: 1,
          name: '디자인',
          color: 'linear-gradient(270deg, #421AE0 -7.94%, #3DA7BE 108.73%)',
        },
        {
          id: 2,
          name: '개발',
          color: 'linear-gradient(270deg, #E09D1A -7.94%, #D72D2D 108.73%)',
        },
      ])
    )
  ),
];

export const mockHandlers: RestHandler[] = [
  ...categoryHandlers,
  ...submitBackendHandlers,
];
