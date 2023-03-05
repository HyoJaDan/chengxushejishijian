const localStorage = typeof window !== `undefined` ? window.localStorage : null;

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
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
