import React, { useState } from 'react';
import './TextBox.css'; // Import the CSS file for styling

const TextBox = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="text-box">
      <input type="text" value={text} onChange={handleChange} className="input-text" />
      {/* <p className="entered-text">You entered: {text}</p> */}
    </div>
  );
};

export default TextBox;
