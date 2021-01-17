import React, {Component} from "react";
import API from "../utils/API";
import "../styles/DataArea.css";

class DataArea extends Component {
    state = {
        search: "",
        order: "descend",
        results: [],
        filteredResults: [],
        headings: [
            {name: "Image"},
            { name: "Name", width: "10%" },
            { name: "Phone", width: "20%" },
            { name: "Email", width: "20%" },
            { name: "DOB", width: "10%" }
        ],
        error: ""
    };

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
                users={this.state.filteredUsers}
                handleSort={this.state.handleSort}
              />
            </div>
          </>
        );
      }
}

export default DataArea;