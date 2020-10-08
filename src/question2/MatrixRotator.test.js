import MatrixRotator from "./MatrixRotator";


// Tests for method: rotateClockwise

test('rotateClockwise: Test with example input data 1', () => {
  expect(MatrixRotator.rotateClockwise("[2, 3, 4, 8]\n[5, 7, 9, 12]\n[1, 0, 6, 10]"))
      .toBe("2, 3, 4, 8, 12, 10, 6, 0, 1, 5, 7, 9");
});

test('rotateClockwise: Test with example input data 2', () => {
  expect(MatrixRotator.rotateClockwise("[1, 2, 3]\n[4, 5, 6]\n[7, 8, 9]\n[10, 11, 12]"))
      .toBe("1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8");
});

test('rotateClockwise: Test with example input data 3', () => {
  expect(MatrixRotator.rotateClockwise("[1, 2]\n[3, 4]"))
      .toBe("1, 2, 4, 3");
});

test('rotateClockwise: Test with example input data 4', () => {
  expect(MatrixRotator.rotateClockwise("[1, 2, 3]\n[4, 5, 6]\n[7, 8, 9]"))
      .toBe("1, 2, 3, 6, 9, 8, 7, 4, 5");
});

test('rotateClockwise: Test with example input data 5', () => {
  expect(MatrixRotator.rotateClockwise("[7, 8 , 9]"))
      .toBe("");
});

test('rotateClockwise: Test with example input data 6', () => {
  expect(MatrixRotator.rotateClockwise("[1, 2, 3, 4, 5]\n[6, 7, 8, 9, 10]\n[11, 12, 13, 14, 15]" +
      "\n[16, 17, 18, 19, 20]"))
      .toBe("1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12");
});


// Tests for method: parseToMatrix

test('parseToMatrix: empty string', () => {
  expect(MatrixRotator.parseToMatrix(""))
      .toEqual([]);
});

test('parseToMatrix: is array typeof', () => {
  expect(Array.isArray(MatrixRotator.parseToMatrix("[2]")))
      .toEqual(true);
});

test('parseToMatrix: one value', () => {
  expect(MatrixRotator.parseToMatrix("[1]"))
      .toEqual([[1]]);
});

test('parseToMatrix: bad string / malformed string', () => {
  expect(MatrixRotator.parseToMatrix("*asd*@q"))
      .toEqual(null);
// Note: this will produce a console.error error (parsing JSON :  Unexpected token * in JSON at position 1)
// To be expected, This is test bad json
});


// Tests for method: cleanAndFormatMatrixString

test('cleanAndFormatMatrixString: string matrix with newlines', () => {
  expect(MatrixRotator.cleanAndFormatMatrixString("[2, 3, 4, 8]\n[5, 7, 9, 12]\n[1, 0, 6, 10]"))
      .toBe("[[2, 3, 4, 8], [5, 7, 9, 12], [1, 0, 6, 10]]");
});

test('cleanAndFormatMatrixString: string matrix with just spaces', () => {
  expect(MatrixRotator.cleanAndFormatMatrixString("[2, 3, 4, 8] [5, 7, 9, 12] [1, 0, 6, 10]"))
      .toBe("[[2, 3, 4, 8], [5, 7, 9, 12], [1, 0, 6, 10]]");
});

test('cleanAndFormatMatrixString: empty string', () => {
  expect(MatrixRotator.cleanAndFormatMatrixString(""))
      .toBe("[]");
});

test('cleanAndFormatMatrixString: string typeof', () => {
  expect(typeof MatrixRotator.cleanAndFormatMatrixString("[1]"))
      .toBe("string");
});


// Tests for method: generateSpiralMatrix
test('generateSpiralMatrix: empty array returns empty array', () => {
  let matrix_sample = [];
  expect(MatrixRotator.generateSpiralMatrix(matrix_sample))
      .toEqual([]);
});

test('generateSpiralMatrix: is array typeof', () => {
  expect(Array.isArray(MatrixRotator.generateSpiralMatrix("[1]")))
      .toEqual(true);
});