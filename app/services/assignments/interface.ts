import type { Assignment } from '~/models/assignment';

export interface AssignmentService {
  getRandomAssignment: () => Promise<Assignment>;
}
