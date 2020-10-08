/**
 * Custom Integer class
 */
export class Integer {
  /**
   * Convert integer to base N String
   * @param value :  number
   * @param numberBase : number
   * @returns {string} : return string number of converted base N
   */
  static toBaseNString(value, numberBase) {
    let numberString = "NaN";
    if (value && numberBase) {
      let N = "";
      let R;
      let Q = Math.floor(Math.abs(value));
      let S = "0123456789abcdefghijklmnopqrstuvwxyz";
      while (true) {
        R = Q % numberBase;
        N = S.charAt(R) + N;
        Q = (Q - R) / numberBase;
        if (Q === 0) {
          break;
        }
        if(isNaN(Q)) {
          return numberString
        }
      }
      numberString = ((value < 0) ? "-" + N : N);
    }
    return numberString;
  }
}