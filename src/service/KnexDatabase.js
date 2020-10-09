class KnexDatabase {

  /**
   * This return the knex database object.
   * @returns {*}
   */
  static getConfiguration(){
    return require('knex')({
      client: 'mysql',
      connection: {
        host : process.env.MYSQL_HOST,
        user : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE
      }
    });
  }

}
module.exports = KnexDatabase;