import React, { useState } from 'react';
import './AdultIncrementor.css'; // Import the CSS file for styling

const AdultIncrementor = ({ adultCount, setAdultCount }) => {

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
      <label htmlFor="adultCount">Adults:</label>
      <div className="incrementor-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{adultCount}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default AdultIncrementor;
