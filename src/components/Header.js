import React from "react";
import Search from "./Search";

function Header({ onSearchText }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchText={onSearchText} />
    </header>
  );
}

export default Header;
