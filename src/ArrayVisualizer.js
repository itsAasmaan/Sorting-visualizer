import React from "react";

const ArrayVisualizer = ({ array, isSorting, speed }) => {
  const maxHeight = 460;
  const maxBarHeight = Math.max(...array, 1);
  const scaleFactor = maxHeight / maxBarHeight;

  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div
          className="array-bar"
          key={index}
          style={{
            height: `${value * scaleFactor}px`,
            backgroundColor: isSorting ? "var(--bar-computing)" : "var(--bar-default)",
            boxShadow: isSorting ? "0 -4px 15px rgba(244, 63, 94, 0.6)" : "0 -2px 10px rgba(139, 92, 246, 0.3)",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ArrayVisualizer;
