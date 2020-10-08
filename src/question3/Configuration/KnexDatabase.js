export default class KnexDatabase {

  /**
   * This return the knex database object.
   * @returns {*}
   */
  static getConfiguration(){
    return require('knex')({
      client: 'mysql',
      connection: {
        host : 'localhost',
        user : 'root',
        password : 'imusic',
        database : 'account_manager'
      }
    });
  }

}
