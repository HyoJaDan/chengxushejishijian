const judgeWhitchPosition = (
  index: number,
  length: number,
  setIsEndIndex: Function,
  setIsStartIndex: Function
) => {
  if (index === 0) {
    setIsStartIndex(true);
  } else if (index === length - 3) setIsEndIndex(true);
  else {
    setIsStartIndex(false);
    setIsEndIndex(false);
  }
};

const toggleLeaving = (setIsMoving: Function) =>
  setIsMoving((prev: boolean) => !prev);
export const increaseIndex = (
  page: number,
  setPage: Function,
  isMoving: boolean,
  setIsMoving: Function,
  length: number,
  setIsStartIndex: Function,
  setIsEndIndex: Function
) => {
  if (isMoving) return;
  toggleLeaving(setIsMoving);
  const totalProblems = length;
  let newIndex = page + 2;
  const maxIndex = totalProblems - 3;
  if (newIndex >= maxIndex) newIndex = maxIndex;
  setPage([newIndex, +22]);
  judgeWhitchPosition(newIndex, length, setIsEndIndex, setIsStartIndex);
};
export const decreaseIndex = (
  page: number,
  setPage: Function,
  isMoving: boolean,
  setIsMoving: Function,
  length: number,
  setIsStartIndex: Function,
  setIsEndIndex: Function
) => {
  if (isMoving) return;
  toggleLeaving(setIsMoving);

  let newIndex = page - 2;
  if (newIndex < 0) newIndex = 0;
  setPage([newIndex, -2]);
  judgeWhitchPosition(newIndex, length, setIsEndIndex, setIsStartIndex);
};
