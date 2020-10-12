

class DataSource {

  /**
   * Set to true to use the MySQL Database, false is the in-memory
   * @type {boolean}
   */
  static useDatabase = (process.env.USE_MYSQL_DB === 'true');

}

module.exports = DataSource