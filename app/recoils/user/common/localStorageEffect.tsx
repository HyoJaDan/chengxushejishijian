const localStorage = typeof window !== `undefined` ? window.localStorage : null;

interface IFunction {
  setSelf: Function;
  onSet: Function;
}

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: IFunction) => {
    if (localStorage) {
      const savedValue = localStorage.getItem(key);
      if (savedValue !== null) {
        setSelf(savedValue);
      }
      onSet((newValue: string, _: string, isReset: boolean) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, newValue);
      });
    }
  };
