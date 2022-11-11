import { describe, expect, it } from 'vitest';
import { AssingmentEndpoint } from '~/constants/endpoint';
import type { Assignment } from '~/models/assignment';
import '../../../__test__/setupTests';
import { mockRandomAssignmentsResult } from './backend.msw';

describe('submit backend msw', () => {
  it('should return hot submits', async () => {
    const resp = await fetch(AssingmentEndpoint.random);
    const assignments = (await resp.json()) as Assignment[];
    expect(assignments).toEqual(mockRandomAssignmentsResult);
  });
});
