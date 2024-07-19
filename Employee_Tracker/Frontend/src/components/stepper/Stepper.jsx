import React from "react";
import PropTypes from "prop-types";

const Ripples = ({ size }) => {
  const getPosition = (size) => {
    const positions = {
      1: "top-0",
      2: "top-24",
      3: "top-48",
      4: "top-72",
      5: "top-96",
      6: "top-120",
    };
    return positions[size];
  };

  return (
    <div className={`relative ${getPosition(size)}`}>
      <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-4"></div>
      <div className="relative flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full">
        <div className="absolute w-16 h-16 bg-purple-200 rounded-full animate-ping"></div>
        <div className="absolute w-24 h-24 bg-purple-100 rounded-full animate-ping"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
      </div>
    </div>
  );
};

Ripples.propTypes = {
  size: PropTypes.number.isRequired,
};

const Stepper = ({ steps }) => {
  return (
    <div className="relative flex flex-col items-center w-1/4">
      {steps.map((step, index) => (
        <Ripples key={index} size={index + 1} />
      ))}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default Stepper;
