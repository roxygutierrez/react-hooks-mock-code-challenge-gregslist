import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((listingArr) => setListings(listingArr));
  }, []);

  const handleListingRemoval = (listingId) => {
    fetch(`http://localhost:6001/listings/${listingId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const newFilteredArr = listings.filter((listing) => {
          return listing.id !== listingId;
        });
        setListings(newFilteredArr);
      });
  };

  const listingsToDisplay = listings.filter((listing) => {
    if (searchedText === "") {
      return listings;
    } else {
      return listing.description
        .toUpperCase()
        .includes(searchedText.toUpperCase());
    }
  });

  return (
    <div className="app">
      <Header onSearchedText={setSearchedText} />
      <ListingsContainer
        listings={listingsToDisplay}
        handleListingRemoval={handleListingRemoval}
      />
    </div>
  );
}

export default App;
