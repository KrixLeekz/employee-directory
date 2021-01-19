import React from 'react';
import Search from "../Search";
import Filter from "../Filter";
import "./styles.css";

function Navbar ({handleSearchChange, handleFormSubmit}){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse row" id="navbarNav">
            <div className="input-group col-8">
              <div className="input-group-prepend">
                <Filter handleFormSubmit={handleFormSubmit} />
              </div>
            </div>
            <div className="search-area col-4">
              <Search handleSearchChange={handleSearchChange} />
            </div>
          </div>
        </nav>
      )
}

export default Navbar;