import { SubmitEndpoint } from '~/constants/endpoint';
import type { SubmitSummary } from '~/models/submit';
import type { SubmitService } from './interface';

export const submitBackend: SubmitService = {
  async getHotSubmits(): Promise<SubmitSummary[]> {
    const url = SubmitEndpoint.hot;
    const response = await fetch(url);
    const hotSubmits = (await response.json()) as SubmitSummary[];
    return hotSubmits;
  },
  async getRandomSubmits(): Promise<SubmitSummary[]> {
    /* const url = SubmitEndpoint.random; */
    throw new Error('Not implemented');
  },
};
