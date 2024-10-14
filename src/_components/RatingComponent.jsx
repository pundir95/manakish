import React from "react";
const TOTAL_STAR_RATING = 5;
const RatingComponent = ({ rating, totalRating = TOTAL_STAR_RATING }) => {
  return (
    <>
      {[...Array(totalRating)].map((_, idx) => {
        let number = idx + 0.5;
        return (
          <>
            {rating >= idx + 1 ? (
              <i key={idx} className="fas fa-star"></i>
            ) : rating >= number ? (
              <i class="fas fa-star-half-alt"></i>  
            ) : (
              <i key={idx} className="fa-regular fa-star"></i>
            )}
          </>
        );
      })}
    </>
  );    
};

export default RatingComponent;
