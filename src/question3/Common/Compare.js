

export default class Compare {
  // TODO : combine method calls in this class.

  /**
   * Sort by name.
   * @param object
   * @returns {void|*}
   */
  static compareByName(object) {
    return object.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
  }

  /**
   * Sort by email
   * @param object
   * @returns {void|*}
   */
  static compareByEmail(object) {
    return object.sort(function(a,b) {return (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0);} );
  }

  /**
   * Sort by dob
   * @param object
   * @returns {void|*}
   */
  static compareByDob(object) {
    return object.sort(function(a,b) {return (a.birthday > b.birthday) ? 1 : ((b.birthday > a.birthday) ? -1 : 0);} );
  }

  /**
   * Sort by balance
   * @param object
   * @returns {void|*}
   */
  static compareByBalance(object) {
    return object.sort(function(a,b) {return (a.balance > b.balance) ? 1 : ((b.balance > a.balance) ? -1 : 0);} );
  }

}