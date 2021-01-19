import React from 'react';
import "./styles.css";

function Search({ handleSearchChange }) {
    return (
      <div className="search">
        <form className="form-inline">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearchChange}
          />
        </form>
      </div>
    );
  }
  export default Search;