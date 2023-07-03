import React from 'react';

const Rating = ({ value, Click }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
       {stars.map((star) => (
        <span
        
          key={star}
          onClick={() => Click(star)}
          style={{
            color: star <= value ? 'gold' : 'gray',
            cursor: 'pointer',
            "fontSize":"30px"
          }}
        >
          {star <= value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Rating;