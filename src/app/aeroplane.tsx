import React, { useRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const AirplanePath = () => {
  const pathRef = useRef(null);
  const [planePosition, setPlanePosition] = useState({ x: 0, y: 0 });
  const [planeRotation, setPlaneRotation] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);

  // Calculate the total path length
  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      setPathLength(path.getTotalLength());
    }
  }, []);

  // Update plane position and rotation dynamically
  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const point = path.getPointAtLength(progress * pathLength);
      const nextPoint = path.getPointAtLength(
        Math.min((progress + 0.005) * pathLength, pathLength)
      );

      const dx = nextPoint.x - point.x;
      const dy = nextPoint.y - point.y;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert radians to degrees

      setPlanePosition({ x: point.x, y: point.y });
      setPlaneRotation(angle); // Set the angle dynamically
    }
  }, [progress, pathLength]);

  // Animate the airplane along the path
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 1 ? prev + 0.005 : 0));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      width="100%"
      height="300"
      viewBox="0 0 800 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* More Curved Path */}
      <path
        ref={pathRef}
        d="M 50 250 
           C 150 50, 300 50, 400 250 
           S 650 450, 750 250"
        fill="none"
        stroke="red"
        strokeWidth="2"
        strokeDasharray="8,8"
      />

      {/* Airplane */}
      <g
        transform={`translate(${planePosition.x}, ${planePosition.y}) rotate(${planeRotation})`}
      >
        <Icon
          icon={"mynaui:aeroplane"}
          width={24}
          height={24}
          style={{
            transform: "rotate(0deg)", // Keep upright rotation for the icon
            transformOrigin: "center",
          }}
        />
      </g>
    </svg>
  );
};

export default AirplanePath;
