import React from 'react';

const ArrayVisualizer = ({ array, isSorting, speed }) => {
  const maxHeight = 500; // Set max height of the container (as specified in CSS)
  const maxBarHeight = Math.max(...array); // Find the maximum value in the array
  const scaleFactor = maxHeight / maxBarHeight; // Calculate the scaling factor to fit bars within the container

  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div
          className="array-bar"
          key={index}
          style={{
            height: `${value * scaleFactor}px`, // Scale the height based on the max bar height
            backgroundColor: isSorting ? 'orange' : 'teal',
          }}
        ></div>
      ))}
    </div>
  );
};

export default ArrayVisualizer;