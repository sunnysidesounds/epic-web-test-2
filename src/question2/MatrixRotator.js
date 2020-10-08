class MatrixRotator {

  results = "";
  matrix = ""
  errorMessage = "A error has occurred";

  /**
   * Rotates matrix clockwise
   * @param matrix_value
   * @returns {string}
   */
  rotateClockwise(matrix_value){
    this.matrix = matrix_value
    return this.processMatrix(matrix_value);
  }

  /**
   * Initial processing of the matrix
   * @param value
   * @returns {string}
   */
  processMatrix(value){
    let matrix = this.parseToMatrix(value);
    if(matrix !== null){
      return this.generateSpiralMatrix(matrix).join(", ");
    } else {
      return this.errorMessage;
    }
  }

  /**
   * Matrix parser
   * @param str
   * @returns {null}
   */
  parseToMatrix(str){
    let matrix = null;
    try {
      let toParseStr = this.cleanAndFormatMatrixString(str);
      // parse string into JSON object for use.
      matrix = JSON.parse(toParseStr);
    } catch(e){
      console.error("ERROR parsing JSON : ", e.message);
      // matrix is null, bubble up error to display error message
    }
    return matrix;
  }

  /**
   * Matrix string formatter
   * @param str
   * @returns {string}
   */
  cleanAndFormatMatrixString(str){
    let cleanValue = str.trim();
    // First remove newlines
    cleanValue = cleanValue.replace(/\n/g, " ");
    // Next find ] [ with regex and replace it with a comma
    cleanValue = cleanValue.replace(/] \[/g, "], [");
    // Create the 2d / nested array
    return "[" + cleanValue + "]";
  }

  /**
   * Generate spiral matrix
   * @param matrix
   * @returns {[]}
   */
  generateSpiralMatrix(matrix) {
    let i;
    let k = 0;
    let outputArray = [];
    let capturedElements = 0;
    let rows = matrix.length;

    if(rows === 0){
      return outputArray;
    }


    let rowEndIndex = rows - 1;
    let columns = matrix[0].length;
    let columnEndIndex = columns - 1;
    let totalElements = (rows * columns);

    if(totalElements <= 3){
      return outputArray;
    }

    while(capturedElements < totalElements) {
      // left to right
      for (i = k; i <= (columnEndIndex - k) && (capturedElements < totalElements); i += 1) {
        outputArray.push(matrix[k][i]);
        capturedElements++;
      }
      // top to bottom
      for (i = k + 1; i <= (rowEndIndex - k) && (capturedElements < totalElements); i += 1) {
        outputArray.push(matrix[i][columnEndIndex - k]);
        capturedElements++;
      }
      // right to left
      for (i = columnEndIndex - k - 1; i >= k && (capturedElements < totalElements); i -= 1) {
        outputArray.push(matrix[rowEndIndex - k][i]);
        capturedElements++;
      }
      // bottom to top
      for (i = rowEndIndex - k - 1; i >= k + 1 && (capturedElements < totalElements); i -= 1) {
        outputArray.push(matrix[i][k]);
        capturedElements++;
      }
      k += 1;

    }
    return outputArray;
  }
}

export default MatrixRotator = new MatrixRotator();
