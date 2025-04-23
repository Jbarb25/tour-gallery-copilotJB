import React, { useState } from 'react';

const Tourcard = ({ tour, onRemove }) => {
  const [readMore, setReadMore] = useState(false);
  
  const shortText = tour.info.substring(0, 200);

  return (
    <article className="tour-card">
      <img src={tour.image} alt={tour.name} />
      <div className="tour-info">
        <div className="tour-header">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>
          {readMore ? tour.info : `${shortText}...`}
          <button 
            className="read-more-btn" 
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="btn" onClick={() => onRemove(tour.id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tourcard;