import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onHandleListingDelete }) {
  const singleListing = listings.map((listing, index) => {
    return (
      <ListingCard
        key={index}
        listing={listing}
        onHandleListingDelete={onHandleListingDelete}
      />
    );
  });
  return (
    <main>
      <ul className="cards">{singleListing}</ul>
    </main>
  );
}

export default ListingsContainer;
