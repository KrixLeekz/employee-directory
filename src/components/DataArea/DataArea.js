import React, {Component} from "react";
import API from "../utils/API";
import "../styles/DataArea.css";

class DataArea extends Component {
    state = {
        search: "",
        order: "descend",
        results: [],
        filteredResults: [],
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
}

export default DataArea;