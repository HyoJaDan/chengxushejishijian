import { atom } from 'recoil';
import { assignmentBackend } from '~/services/assignments/backend';
import type { AssignmentService } from '~/services/assignments/interface';
import { recoilKeySuffix } from '~/utils/recoil-key';

export const assignmentServiceProvider = atom<AssignmentService>({
  key: `assignmentServiceProvider${recoilKeySuffix}`,
  default: assignmentBackend,
});
