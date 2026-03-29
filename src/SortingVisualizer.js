import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import * as algorithms from "./algorithms";
import ArrayVisualizer from "./ArrayVisualizer";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [size, setSize] = useState(50);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubbleSort");

  const generateArray = useCallback(
    (sizeToGen = size) => {
      const newArray = [];
      for (let i = 0; i < sizeToGen; i++) {
        newArray.push(Math.floor(Math.random() * 500) + 10);
      }
      setArray(newArray);
    },
    [size],
  );

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  const handleSorting = async () => {
    setIsSorting(true);
    const sortFunction = algorithms[selectedAlgorithm];
    if (sortFunction) {
      await sortFunction(array, setArray, speed);
    }
    setIsSorting(false);
  };

  return (
    <div className="visualizer-container">
      <h1 className="title">Sorting Visualizer</h1>

      <div className="controls">
        <button className="secondary-btn" onClick={() => generateArray(size)} disabled={isSorting}>
          Generate Array
        </button>

        <div className="vertical-divider"></div>

        <div className="select-wrapper">
          <label>Algorithm</label>
          <select value={selectedAlgorithm} onChange={(e) => setSelectedAlgorithm(e.target.value)} disabled={isSorting}>
            <option value="bubbleSort">Bubble Sort</option>
            <option value="selectionSort">Selection Sort</option>
            <option value="insertionSort">Insertion Sort</option>
            <option value="cocktailShakerSort">Cocktail Shaker Sort</option>
            <option value="gnomeSort">Gnome Sort</option>
            <option value="oddEvenSort">Odd-Even Sort</option>
            <option value="combSort">Comb Sort</option>
            <option value="quickSort">Quick Sort</option>
            <option value="mergeSort">Merge Sort</option>
          </select>
        </div>

        <div className="select-wrapper">
          <label>Size</label>
          <select value={size} onChange={(e) => setSize(Number(e.target.value))} disabled={isSorting}>
            <option value="20">20 Items</option>
            <option value="50">50 Items</option>
            <option value="100">100 Items</option>
            <option value="150">150 Items</option>
            <option value="200">200 Items</option>
          </select>
        </div>

        <div className="select-wrapper">
          <label>Speed</label>
          <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))} disabled={isSorting}>
            <option value="5">Insane</option>
            <option value="15">Very Fast</option>
            <option value="30">Fast</option>
            <option value="50">Normal</option>
            <option value="100">Slow</option>
            <option value="500">Very Slow</option>
          </select>
        </div>

        <div className="vertical-divider"></div>

        <button className="primary" onClick={handleSorting} disabled={isSorting}>
          Sort!
        </button>
        <button className="reset-btn" onClick={() => generateArray(size)} disabled={isSorting}>
          Reset
        </button>
      </div>

      <ArrayVisualizer array={array} isSorting={isSorting} speed={speed} />
    </div>
  );
};

export default SortingVisualizer;
