import React from 'react';

function Search({ handleFormSubmit }) {
    return (
      <div className="search">
        <form className="form-inline">
          <button onClick={handleFormSubmit} type="submit" className="btn-primary">
            Sort by Gender
          </button>
        </form>
      </div>
    );
  }
  export default Search;