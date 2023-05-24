import React, { useState } from 'react';
import './ChekInDatePicker.css'; // Import the CSS file for styling

const ChekInDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="date-picker">
      <label htmlFor="datePicker">Select a date:</label>
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
