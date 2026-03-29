import { sleep } from "./utils";

export const quickSort = async (array, setArray, speed) => {
  const arr = [...array];

  async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await sleep(speed);
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await sleep(speed);

    return i + 1;
  }

  async function quickSortRecursion(arr, low, high) {
    if (low < high) {
      let p = await partition(arr, low, high);
      quickSortRecursion(arr, low, p - 1);
      quickSortRecursion(arr, p + 1, high);
    }
  }

  await quickSortRecursion(arr, 0, arr.length - 1);
};
