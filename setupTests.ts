/* eslint-disable import/no-extraneous-dependencies */
import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from '../app/services/msw/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
