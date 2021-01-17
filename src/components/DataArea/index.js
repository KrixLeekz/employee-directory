import React, { Component } from "react";
import API from "../utils/API";
import "../styles/DataArea.css";

class DataArea extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      order: "descend",
      results: [{}],
      filteredResults: [{}],
      headings: [
        { name: "Image" },
        { name: "Name" },
        { name: "Phone" },
        { name: "Email" },
        { name: "DOB" }
      ],
      error: "",

      handleSort: heading => {
        if (this.state.order === "descend") {
          this.setState({
            order: "ascend"
          })
        } else {
          this.setState({
            order: "descend"
          })
        }

        const compare = (a, b) => {
          if (this.state.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            }
            // numerically
            else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return a[heading] - b[heading];
            }
          } else {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            }
            else if (heading === "name") {
              return b[heading].first.localeCompare(a[heading].first);
            } else {
              return b[heading] - a[heading];
            }
          }

        }
        const sortedResults = this.state.filteredResults.sort(compare);
        this.setState({ filteredResults: sortedResults });
      },

      handleSearchChange: event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.results.filter(item => {
          let values = Object.values(item)
            .join("")
            .toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredResults: filteredList });
      }
    };
  }


  componentDidMount() {
    API.getNumEmployees(500).then(results => {
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
}

export default DataArea;