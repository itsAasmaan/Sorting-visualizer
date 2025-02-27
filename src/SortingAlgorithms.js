const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Bubble Sort
export const bubbleSort = async (array, setArray, speed) => {
  const arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await sleep(speed);
      }
    }
  }
};

// Insertion Sort
export const insertionSort = async (array, setArray, speed) => {
  const arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      setArray([...arr]);
      await sleep(speed);
    }
    arr[j + 1] = key;
    setArray([...arr]);
    await sleep(speed);
  }
};

// Selection Sort
export const selectionSort = async (array, setArray, speed) => {
  const arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setArray([...arr]);
      await sleep(speed);
    }
  }
};

// Shell Sort
export const shellSort = async (array, setArray, speed) => {
  const arr = [...array];
  let gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
        setArray([...arr]);
        await sleep(speed);
      }
      arr[j] = temp;
      setArray([...arr]);
      await sleep(speed);
    }
    gap = Math.floor(gap / 2);
  }
};

// Cocktail Shaker Sort
export const cocktailShakerSort = async (array, setArray, speed) => {
  const arr = [...array];
  let swapped;
  let start = 0;
  let end = arr.length - 1;
  do {
    swapped = false;
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        setArray([...arr]);
        await sleep(speed);
      }
    }
    if (!swapped) break;
    swapped = false;
    end--;
    for (let i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        setArray([...arr]);
        await sleep(speed);
      }
    }
    start++;
  } while (swapped);
};

// Radix Sort
export const radixSort = async (array, setArray, speed) => {
  const arr = [...array];
  const getMax = (arr) => Math.max(...arr);
  const countingSort = async (arr, exp) => {
    const output = Array(arr.length);
    const count = Array(10).fill(0);
    for (let i = 0; i < arr.length; i++) {
      count[Math.floor(arr[i] / exp) % 10]++;
    }
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
      count[Math.floor(arr[i] / exp) % 10]--;
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
      setArray([...arr]);
      await sleep(speed);
    }
  };

  const max = getMax(arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    await countingSort(arr, exp);
  }
};

// Quick Sort (new)
export const quickSort = async (array, setArray, speed) => {
  const arr = [...array];

  const partition = async (arr, low, high) => {
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
    return i + 1;
  };

  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      let pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    }
  };

  await quickSortHelper(arr, 0, arr.length - 1);
};

// Merge Sort (new)
export const mergeSort = async (array, setArray, speed) => {
  const arr = [...array];
  
  const merge = async (arr, left, right) => {
    let mergedArray = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        mergedArray.push(left[i]);
        i++;
      } else {
        mergedArray.push(right[j]);
        j++;
      }
    }

    return [...mergedArray, ...left.slice(i), ...right.slice(j)];
  };

  const mergeSortHelper = async (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = await mergeSortHelper(left);
    const sortedRight = await mergeSortHelper(right);
    return merge(sortedLeft, sortedRight);
  };

  const sortedArray = await mergeSortHelper(arr);
  setArray(sortedArray);
};

// Heap Sort
export const heapSort = async (array, setArray, speed) => {
    const arr = [...array];
    const heapify = (arr, n, i) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
  
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        setArray([...arr]);
        heapify(arr, n, largest);
      }
    };
  
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setArray([...arr]);
      heapify(arr, i, 0);
      await sleep(speed);
    }
};