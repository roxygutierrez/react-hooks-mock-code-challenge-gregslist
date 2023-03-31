import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((listingArr) => setListings(listingArr));
  }, []);

  const handleListingDelete = (listingId) => {
    fetch(`http://localhost:6001/listings/${listingId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const filteredListings = listings.filter((listing) => {
          return listing.id !== listingId;
        });
        setListings(filteredListings);
      });
  };

  const searchText = (name) => {
    const filteredListings = listings.filter((search) => {
      return search.description.toUpperCase().includes(name.toUpperCase());
    });
    setListings(filteredListings);
  };

  return (
    <div className="app">
      <Header onSearchText={searchText} />
      <ListingsContainer
        listings={listings}
        onHandleListingDelete={handleListingDelete}
      />
    </div>
  );
}

export default App;
