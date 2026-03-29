import { sleep } from "./utils";

export const mergeSort = async (array, setArray, speed) => {
  const arr = [...array];

  async function merge(arr, low, mid, high) {
    let left = arr.slice(low, mid + 1);
    let right = arr.slice(mid + 1, high + 1);

    let i = 0;
    let j = 0;
    let k = low;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
      setArray([...arr]);
      await sleep(speed);
    }

    while (i < left.length) {
      arr[k++] = left[i++];
      setArray([...arr]);
      await sleep(speed);
    }

    while (j < right.length) {
      arr[k++] = right[j++];
      setArray([...arr]);
      await sleep(speed);
    }
  }

  async function mergeSortRecursion(arr, low, high) {
    if (low < high) {
      let mid = Math.floor(low + (high - low) / 2);
      await mergeSortRecursion(arr, low, mid);
      await mergeSortRecursion(arr, mid + 1, high);

      await merge(arr, low, mid, high);
    }
  }

  await mergeSortRecursion(arr, 0, arr.length - 1);
};
