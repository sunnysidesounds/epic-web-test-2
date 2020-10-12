import axios from "axios";

export default {
  /**
   * Get all accounts
   * @returns {Promise<{data: *}>}
   */
  getAll: function () {
    return axios.get(`/accounts`)
        .then(response => {
          return {
            data: response.data
          };
        })
  },
  /**
   * Get account by id
   * @param id
   * @returns {Promise<{data: *}>}
   */
  getById: function (id) {
    return axios.get(`/accounts/`+id)
        .then(response => {
          return {
            data: response.data
          };
        })
  },
  /**
   * Update account by id
   * @param id
   * @param user_data
   * @returns {Promise<{data: *}>}
   */
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
  /**
   * Create a new account
   * @param user_data
   * @returns {Promise<{data: *}>}
   */
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
  /**
   * Delete an account
   * @param id
   * @returns {Promise<{data: *}>}
   */
  deleteAccount: function (id) {
    return axios.delete(`/accounts/` + id)
        .then(response => {
          return {
            data: response.data
          };
        })
  }
}