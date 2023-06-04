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
  index: number,
  setIndex: Function,
  isMoving: boolean,
  setIsMoving: Function,
  length: number,
  setIsEndIndex: Function,
  setIsStartIndex: Function
) => {
  if (isMoving) return;
  toggleLeaving(setIsMoving);

  const totalProblems = length;
  let newIndex = index + 2;
  const maxIndex = totalProblems - 3;
  if (newIndex >= maxIndex) newIndex = maxIndex;

  setIndex(newIndex);
  judgeWhitchPosition(newIndex, length, setIsEndIndex, setIsStartIndex);
};
export const decreaseIndex = (
  index: number,
  setIndex: Function,
  isMoving: boolean,
  setIsMoving: Function,
  length: number,
  setIsStartIndex: Function,
  setIsEndIndex: Function
) => {
  if (isMoving) return;
  toggleLeaving(setIsMoving);

  let newIndex = index - 2;
  if (newIndex < 0) newIndex = 0;
  setIndex(newIndex);
  judgeWhitchPosition(newIndex, length, setIsEndIndex, setIsStartIndex);
};
