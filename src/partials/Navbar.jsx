import React from "react";
import "../styles/navbar.scss";

const Navbar = ({ searchValue, onChangeSearchValue }) => {
  return (
    <div className="navbar">
      <img src="favicon.ico" alt="logo" className="navbar-logo" />
      <div className="navbar-filters">
        <input
          className="navbar-search"
          type="text"
          value={searchValue}
          onChange={(e) => onChangeSearchValue(e.target.value)}
          placeholder="Search a Country"
        />
        <select name="group" id="group" className="navbar-group">
          <option value="all">All</option>
          <option value="continent">Continent</option>
          <option value="language">Language</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
