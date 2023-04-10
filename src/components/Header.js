import React from "react";
import Search from "./Search";

function Header({ onSearchedText }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchedText={onSearchedText} />
    </header>
  );
}

export default Header;
