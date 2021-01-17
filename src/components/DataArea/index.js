import React, { Component } from "react";
import API from "../utils/API";
import "../styles/DataArea.css";

class DataArea extends Component {
  constructor(){
    state = {
      search: "",
      order: "descend",
      results: [],
      filteredResults: [],
      headings: [
        { name: "Image" },
        { name: "Name" },
        { name: "Phone" },
        { name: "Email" },
        { name: "DOB" }
      ],
      error: ""
    };
  }
}

componentDidMount() {
  API.getNumEmployees().then(results => {
    this.setState({
      results: results.data.results,
      filteredResults: results.data.results
    });
  });
}

render() {
  return (
    <>
      <Nav handleSearchChange={this.state.handleSearchChange} />
      <div className="data-area">
        <DataTable
          headings={this.state.headings}
          results={this.state.filteredResults}
          handleSort={this.state.handleSort}
        />
      </div>
    </>
  );
}


export default DataArea;