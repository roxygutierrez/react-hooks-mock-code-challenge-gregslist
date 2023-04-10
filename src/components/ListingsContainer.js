import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleListingRemoval }) {
  const renderOneListing = listings.map((listing, id) => {
    return (
      <ListingCard
        key={id}
        listing={listing}
        handleListingRemoval={handleListingRemoval}
      />
    );
  });

  return (
    <main>
      <ul className="cards">{renderOneListing}</ul>
    </main>
  );
}

export default ListingsContainer;
