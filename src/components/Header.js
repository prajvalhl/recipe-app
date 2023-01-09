import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { search, onInputChange, onSearchClick } = props;

  return (
    <div className="jumbotron">
      <Link to="/contact" className="custom-btn btn-contact">
        Contact Us
      </Link>
      <h1 className="display-1">Food Recipe</h1>
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search for Recipe"
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
