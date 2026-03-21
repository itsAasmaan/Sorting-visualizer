import { sleep } from "./utils";

export const selectionSort = async (array, setArray, speed) => {
  const arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    let min_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    setArray([...arr]);
    await sleep(speed);
  }
};
