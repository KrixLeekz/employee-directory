import React, {Component} from "react";
import API from "../utils/API";
import "../styles/DataArea.css";

class DataArea extends Component {
    state = {
        search: "",
        results: [],
        error: ""
    };
}

export default DataArea;