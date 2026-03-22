import { sleep } from "./utils";

export const combSort = async (array, setArray, speed) => {
  let arr = [...array];

  let gap = arr.length;
  let shrink = 1.3;
  let sorted = false;

  while (!sorted) {
    gap = Math.floor(gap / shrink);

    if (gap <= 1) {
      gap = 1;
      sorted = true;
    } else if (gap === 9 || gap === 10) {
      gap = 11;
    }

    let i = 0;
    while (i + gap < arr.length) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        setArray([...arr]);
        await sleep(speed);
      }
      i++;
    }
  }
};
