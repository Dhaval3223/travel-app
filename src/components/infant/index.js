import React, { useState } from 'react';
import './style.css'; // Import the CSS file for styling

const InfantIncrementor = ({ adultCount, setAdultCount }) => {

  const handleIncrement = () => {
    setAdultCount(adultCount + 1);
  };

  const handleDecrement = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };

  return (
    <div className="incrementor">
      <label htmlFor="adultCount">Infant:</label>
      <div className="incrementor-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{adultCount}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default InfantIncrementor;
