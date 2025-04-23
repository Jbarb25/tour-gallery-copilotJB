import React from 'react';
import Tourcard from './TourCard';

const Gallery = ({ tours, onRemove }) => {
  return (
    <div className="tours">
      {tours.map((tour) => (
        <Tourcard 
          key={tour.id} 
          tour={tour} 
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default Gallery;