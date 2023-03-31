import React, { useState } from "react";

function ListingCard({ listing, onHandleListingDelete }) {
  const { id, description, image, location } = listing;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleListingDeleteClick = () => {
    onHandleListingDelete(id);
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            onClick={handleFavoriteClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={handleFavoriteClick}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          onClick={handleListingDeleteClick}
          className="emoji-button delete"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
