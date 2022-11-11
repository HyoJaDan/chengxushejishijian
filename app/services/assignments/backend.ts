import { AssingmentEndpoint } from '~/constants/endpoint';
import type { Assignment } from '~/models/assignment';
import type { AssignmentService } from './interface';

export const assignmentBackend: AssignmentService = {
  async getRandomAssignment(): Promise<Assignment> {
    const resp = await fetch(AssingmentEndpoint.random);
    const assignments = (await resp.json()) as Assignment;
    return assignments;
  },
};
