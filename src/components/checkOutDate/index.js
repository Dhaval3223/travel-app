import React, { useState } from 'react';
import './ChekOutDatePicker.css'; // Import the CSS file for styling

const ChekInDatePicker = ({ selectedDate, setSelectedDate }) => {

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="date-picker">
      <label htmlFor="datePicker">Check Out Date:</label>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
      {/* <p>Selected date: {selectedDate}</p> */}
    </div>
  );
};

export default ChekInDatePicker;
