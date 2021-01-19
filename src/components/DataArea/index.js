import React, { Component } from "react";
import Navbar from "../Navbar";
import Table from "../Table";
import API from "../../utils/API";
import "./styles.css";

class DataArea extends Component {
  constructor() {
    super();
    this.state = {
      order: "descend",
      gender: "",
      users: [{}],
      filteredusers: [{}],
      headings: [
        { name: "Image" },
        { name: "Name" },
        { name: "Phone" },
        { name: "Email" },
        { name: "DOB" }
      ],

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
        const sortedusers = this.state.filteredusers.sort(compare);
        this.setState({ filteredusers: sortedusers });
      },

      handleSearchChange: event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
          let values = Object.values(item)
            .join("")
            .toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredusers: filteredList });
      },

      handleFormSubmit: event => {
        event.preventDefault();
        if (this.state.gender === "female") {
          API.filterByGender("female").then(res => {
            this.setState({
              users: res.data.results,
              filteredusers: res.data.results,
              gender: "male"
            });
            
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
          })
          return;
        }
        if (this.state.gender === "" || "male") {
          API.filterByGender("male").then(res => {
            this.setState({
              users: res.data.results,
              filteredusers: res.data.results,
              gender: "female"
            });
          })
          return;
        } 
        
      }
    }
  };



  componentDidMount() {
    API.getNumEmployees().then(res => {
      this.setState({
        users: res.data.results,
        filteredusers: res.data.results
      });
    });
  }

  render() {
    return (
      <>
        <Navbar handleSearchChange={this.state.handleSearchChange} handleFormSubmit={this.state.handleFormSubmit} />
        <div className="data-area">
          <Table
            headings={this.state.headings}
            users={this.state.filteredusers}
            handleSort={this.state.handleSort}
          />
        </div>
      </>
    );
  }
}

export default DataArea;