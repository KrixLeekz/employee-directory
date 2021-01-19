import React from 'react';
import "./styles.css";

function Search({ handleFormSubmit }) {
    return (
      <div className="search">
        <form className="form-inline">
          <button onClick={handleFormSubmit} type="submit">
            Sort by Gender
          </button>
        </form>
      </div>
    );
  }
  export default Search;