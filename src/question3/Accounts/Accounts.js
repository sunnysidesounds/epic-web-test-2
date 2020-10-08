import axios from "axios";

export default {
  getAll: function () {
    return axios.get(`/accounts`)
        .then(response => {
          return {
            data: response.data
          };
        })
  },
  getById: function (id) {
    return axios.get(`/accounts/`+id)
        .then(response => {
          return {
            data: response.data
          };
        })
  },
  updateAccount: function (id, user_data) {
    return axios.put(`/accounts/`+id, {
      name: user_data.name,
      email: user_data.email,
      birthday: user_data.birthday,
      balance: user_data.balance
    })
    .then(response => {
      return {
        data: response.data
      };
    })
  },
  newAccount: function (user_data) {
    var config = {
      headers: {"Content-Type": "application/json"}
    };
    return axios.post(`/accounts`, {
      name: user_data.name,
      email: user_data.email,
      birthday: user_data.birthday,
      balance: user_data.balance
    }, config)
      .then(response => {
        return {
          data: response.data
        };
      })
  },
  deleteAccount: function (id) {
    return axios.delete(`/accounts/` + id)
        .then(response => {
          return {
            data: response.data
          };
        })
  }
}