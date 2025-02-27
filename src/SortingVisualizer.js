import React, { useState } from 'react';
import './App.css';
import { bubbleSort, insertionSort, selectionSort, shellSort, heapSort, radixSort, quickSort, mergeSort } from './SortingAlgorithms';
import ArrayVisualizer from './ArrayVisualizer';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [size, setSize] = useState(50);

  const generateArray = (size) => {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 10);
    }
    setArray(newArray);
  };

  const handleSorting = async (sortFunction) => {
    setIsSorting(true);
    await sortFunction(array, setArray, speed);
    setIsSorting(false);
  };

  return (
    <div className="visualizer-container">
      <div className="controls">
        <button onClick={() => generateArray(size)} disabled={isSorting}>
          Generate New Array
        </button>

        {/* Sorting Algorithm Buttons */}
        <button onClick={() => handleSorting(bubbleSort)} disabled={isSorting}>Bubble Sort</button>
        <button onClick={() => handleSorting(insertionSort)} disabled={isSorting}>Insertion Sort</button>
        <button onClick={() => handleSorting(selectionSort)} disabled={isSorting}>Selection Sort</button>
        <button onClick={() => handleSorting(shellSort)} disabled={isSorting}>Shell Sort</button>
        <button onClick={() => handleSorting(heapSort)} disabled={isSorting}>Heap Sort</button>
        <button onClick={() => handleSorting(radixSort)} disabled={isSorting}>Radix Sort</button>
        <button onClick={() => handleSorting(quickSort)} disabled={isSorting}>Quick Sort</button>
        <button onClick={() => handleSorting(mergeSort)} disabled={isSorting}>Merge Sort</button>

        {/* Dropdown for Array Size */}
        <select
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          disabled={isSorting}
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
        </select>

        {/* Dropdown for Speed */}
        <select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          disabled={isSorting}
        >
          <option value="10">Very Slow</option>
          <option value="30">Slow</option>
          <option value="50">Normal</option>
          <option value="100">Fast</option>
          <option value="200">Very Fast</option>
        </select>
      </div>
      <ArrayVisualizer array={array} isSorting={isSorting} speed={speed} />
    </div>
  );
};

export default SortingVisualizer;