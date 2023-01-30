import { atom, DefaultValue } from 'recoil';
import { recoilKeySuffix } from '~/utils/recoil-key';

const localStorage = typeof window !== `undefined` ? window.localStorage : null;

export const getId = atom({
  key: `getId${recoilKeySuffix}`,
  default: '',
  effects_UNSTABLE: [
    /* 없어도됨  */
    ({ onSet, setSelf }) => {
      if (localStorage) {
        const storedData = localStorage.getItem('thePoolAccessToken');
        if (storedData != null) {
          setSelf(JSON.parse(storedData));
        }
        onSet((newValue) => {
          if ((newValue as unknown) instanceof DefaultValue) {
            localStorage.removeItem('thePoolAccessToken');
          } else {
            localStorage.setItem(
              'thePoolAccessToken',
              JSON.stringify(newValue)
            );
          }
        });
      }
    },
  ],
});
