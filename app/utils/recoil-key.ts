import { isProduction } from './env';

export const recoilKeySuffix = isProduction() ? '' : Date.now().toString(36);
