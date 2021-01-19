import React, { Component } from "react";
import Navbar from "../Navbar";
import Table from "../Table";
import API from "../../utils/API";
import "./styles.css";

class DataArea extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
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
        if(this.state.gender === "" || "male"){
          API.filterByGender("male").then(res => {
            this.setState({
              users: res.data.results,
              filteredusers: res.data.results,
              gender: "female"
            });
            alert(this.state.gender)
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
          })
        }
        if(this.state.gender === "female"){
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
        }
      }
    };
  }


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