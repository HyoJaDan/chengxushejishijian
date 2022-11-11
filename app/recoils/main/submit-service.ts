import { atom } from 'recoil';
import { submitBackend } from '~/services/submits/backend';
import { recoilKeySuffix } from '~/utils/recoil-key';

export const submitServiceProvider = atom({
  key: `submitServiceProvider${recoilKeySuffix}`,
  default: submitBackend,
});
