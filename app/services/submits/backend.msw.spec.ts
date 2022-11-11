import { describe, expect, it } from 'vitest';
import { SubmitEndpoint } from '~/constants/endpoint';
import type { SubmitSummary } from '~/models/submit';
import '../../../__test__/setupTests';
import { mockHotSubmitResult } from './backend.msw';

describe('submit backend msw', () => {
  it('should return hot submits', async () => {
    const resp = await fetch(SubmitEndpoint.hot);
    const hotsubmits = (await resp.json()) as SubmitSummary[];
    expect(hotsubmits).toEqual(mockHotSubmitResult);
  });
});
