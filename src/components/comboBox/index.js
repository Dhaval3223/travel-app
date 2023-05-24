import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './style.css'; // Import the CSS file for styling

const ComboBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    // Add more options as needed
  ];

  const toggleCombo = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  return (
    <div className={`combo-box ${isOpen ? 'open' : ''}`}>
      <div className="selected-option" onClick={toggleCombo}>
        {selectedOption || 'Destination'}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      {isOpen && (
        <ul className="options-list">
          {options.map((option) => (
            <li key={option.id} onClick={() => handleOptionSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
