import type { SetStateAction } from 'react';

export const increaseIndex = (
  index: number,
  setIndex: Function,
  leaving: boolean,
  setLeaving: Function,
  length: number,
  setEndIndex: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) => {
  const toggleLeaving = () => setLeaving((prev: boolean) => !prev);
  if (leaving) return;
  toggleLeaving();
  const totalProblems = length;
  let newIndex = index + 2;
  const maxIndex = totalProblems - 3;
  if (newIndex >= maxIndex) {
    newIndex = maxIndex;
    setEndIndex(true);
  }
  setIndex(newIndex);
};
