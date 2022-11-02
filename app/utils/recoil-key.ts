import { isProduction } from './env';

/* c8 ignore next */
export const recoilKeySuffix = isProduction() ? '' : Date.now().toString(36);
