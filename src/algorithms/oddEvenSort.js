import { sleep } from "./utils";

export const oddEvenSort = async (array, setArray, speed) => {
  const arr = [...array];

  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 1; i <= arr.length - 2; i = i + 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        setArray([...arr]);
        await sleep(speed);
        isSorted = false;
      }
    }

    for (let i = 0; i <= arr.length - 2; i = i + 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        setArray([...arr]);
        await sleep(speed);
        isSorted = false;
      }
    }
  }
};
