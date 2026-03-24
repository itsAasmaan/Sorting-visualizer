import { sleep } from "./utils";

export const gnomeSort = async (array, setArray, speed) => {
  const arr = [...array];

  let idx = 0;
  while (idx < arr.length) {
    if (idx === 0) {
      idx++;
    } else if (arr[idx] >= arr[idx - 1]) {
      idx++;
    } else {
      [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]];
      setArray([...arr]);
      await sleep(speed);
      idx--;
    }
  }
};
