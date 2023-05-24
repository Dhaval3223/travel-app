import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './style.css'; // Import the CSS file for styling

const BoardBasis = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { id: 1, label: 'Room Only' },
    { id: 2, label: 'Self Centering' },
    { id: 3, label: 'Half Board' },
    { id: 3, label: 'Bad And Breakfast' },
    { id: 3, label: 'Full Board' },
    { id: 3, label: 'All Inclusive' },
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
        {selectedOption || 'Board Basis'}
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

export default BoardBasis;
