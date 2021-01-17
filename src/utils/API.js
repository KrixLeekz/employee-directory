import axios from 'axios';

export default {
    getNumEmployees: function(numOfUsers) {
        return axios.get("https://randomuser.me/api/?results=" + numOfUsers);
    }
};