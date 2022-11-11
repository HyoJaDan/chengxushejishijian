import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { assignmentServiceProvider } from '~/recoils/main/assignment-service';

export function useRandomAssignment() {
  const service = useRecoilValue(assignmentServiceProvider);
  const assignment = useQuery('randomAssignment', service.getRandomAssignment);
  return assignment.data;
}
