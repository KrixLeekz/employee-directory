import axios from 'axios';

export default {
    getNumEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=300&nat=us");
    },

    filterByGender: function(gender) {
        return axios.get("https://randomuser.me/api/?results=300&nat=us&gender=" + gender);
    }
};