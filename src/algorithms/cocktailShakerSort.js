import { sleep } from "./utils";

export const cocktailShakerSort = async (array, setArray, speed) => {
  const arr = [...array];

  let swapped = true;
  let start = 0;
  let end = arr.length - 1;

  while (swapped) {
    swapped = false;
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        setArray([...arr]);
        await sleep(speed);
        swapped = true;
      }
    }

    if (!swapped) break;

    swapped = false;
    --end;
    for (let i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        setArray([...arr]);
        await sleep(speed);
        swapped = true;
      }
    }

    +start;
  }
};
