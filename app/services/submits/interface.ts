import type { SubmitSummary } from '~/models/submit';

export interface SubmitService {
  getHotSubmits: () => Promise<SubmitSummary[]>;
  getRandomSubmits: () => Promise<SubmitSummary[]>;
}
