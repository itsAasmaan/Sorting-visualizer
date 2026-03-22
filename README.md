# Sorting Visualizer

A clean, simple Sorting Visualizer application for visualizing how different sorting algorithms work under the hood.

This project aims to be a comprehensive library of sorting methodologies.

## Supported Algorithms & Roadmap

### Simple / O(n²) Comparison Sorts

- [x] **Bubble Sort**
- [x] **Insertion Sort**
- [x] **Selection Sort**
- [x] **Cocktail Shaker Sort** (Bidirectional Bubble Sort)
- [ ] **Gnome Sort**
- [ ] **Odd-Even Sort** (Brick Sort)
- [ ] **Comb Sort**

### Efficient / O(n log n) Comparison Sorts

- [ ] **Quick Sort**
- [ ] **Merge Sort**
- [ ] **Heap Sort**
- [ ] **Tree Sort**
- [ ] **Tournament Sort**

### Sub-quadratic Comparison Sorts

- [ ] **Shell Sort**

### Non-Comparison / Distribution Sorts

- [ ] **Radix Sort** (LSD & MSD)
- [ ] **Counting Sort**
- [ ] **Bucket Sort**
- [ ] **Pigeonhole Sort**
- [ ] **Flashsort**

### Hybrid Sorts (Real-world implementations)

- [ ] **Timsort** (Merge + Insertion - used in Python/Java)
- [ ] **Introsort** (Quick + Heap + Insertion - used in C++)
- [ ] **Block Sort**

### Parallel / Network Sorts

- [ ] **Bitonic Sort**
- [ ] **Batcher Odd-Even Mergesort**

### Esoteric & "Joke" Sorts (For fun!)

- [ ] **Bogo Sort** (Random permutation)
- [ ] **Pancake Sort** (Sorting by reversing prefixes)
- [ ] **Stooge Sort** (Highly inefficient recursive sort)
- [ ] **Sleep Sort** (Time-based sorting)
- [ ] **Stalin Sort** (Eliminates out-of-order elements)

---

## Installation

To run the Sorting Visualizer on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/itsAasmaan/Sorting-visualizer.git
cd sorting-visualizer
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed. If not, [install Node.js](https://nodejs.org/).

```bash
npm install
```

### 3. Run the Application

Once all dependencies are installed, start the React application:

```bash
npm start
```

This will open the application in your default web browser. The visualizer should be running at `http://localhost:3000`.

## How to Use

1. **Select a Sorting Algorithm**: Choose the algorithm you want to visualize from the dropdown menu.
2. **Adjust Animation Speed**: Use the speed control slider to adjust the speed of the sorting process.
3. **Generate New Array**: Click on the "Generate New Array" button to create a new random array for sorting.
4. **Start the Sorting**: Press the "Sort" button to begin visualizing the sorting process.
