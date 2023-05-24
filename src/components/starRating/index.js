import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import './style.css'; // Import the CSS file for styling

const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < rating ? solidStar : regularStar}
          onClick={() => handleStarClick(index + 1)}
          className='starRatingIcon'
        />
      ))}
    </div>
  );
};

export default StarRating;
