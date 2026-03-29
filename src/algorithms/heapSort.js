import { sleep } from "./utils";

export const heapSort = async (array, setArray, speed) => {
  const arr = [...array];

  async function heapify(arr, heapSize, index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let largest = index;

    if (left < heapSize && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [arr[index], arr[largest]] = [arr[largest], arr[index]];
      setArray([...arr]);
      await sleep(speed);
      await heapify(arr, heapSize, largest);
    }
  }

  async function buildHeap(arr) {
    let heapSize = arr.length;
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      await heapify(arr, heapSize, i);
    }
  }

  async function heapSortFunc(arr) {
    let heapSize = arr.length;
    await buildHeap(arr);

    for (let i = heapSize - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setArray([...arr]);
      await sleep(speed);

      heapSize -= 1;
      await heapify(arr, i, 0);
    }
  }

  await heapSortFunc(arr);
};
