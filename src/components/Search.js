import React, { useState } from "react";

function Search({ onSearchText }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearchText(search);
  }

  const handleSearchText = (e) => {
    setSearch(e.target.value);
  };
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearchText}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
