import React, { useState } from "react";

function ListingCard({ listing, handleListingRemoval }) {
  const { id, description, image, location } = listing;
  const [isFave, setIsFave] = useState(false);

  const handleDeleteClick = () => {
    return handleListingRemoval(id);
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" onClick={() => setIsFave(!isFave)}>
        {isFave ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
