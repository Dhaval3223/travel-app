import React, { useState } from 'react';
import './MultiSelectComboBox.css'; // Import the CSS file for styling

const MultiSelectComboBox = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option) => {
    const isSelected = selectedOptions.includes(option);
    let newSelectedOptions = [];

    if (isSelected) {
      newSelectedOptions = selectedOptions.filter((item) => item !== option);
    } else {
      newSelectedOptions = [...selectedOptions, option];
    }

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  return (
    <div className="multiselect-combobox">
      <div className="combobox-input" onClick={toggleDropdown}>
        <input type="text" readOnly value={selectedOptions.join(', ')} />
        <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="dropdown">
          {options.map((option) => (
            <div
              key={option}
              className={`option ${
                selectedOptions.includes(option) ? 'selected' : ''
              }`}
              onClick={() => handleOptionChange(option)}
            >
              <input
                type="checkbox"
                placeholder='Please Select Option'
                id={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectComboBox;
