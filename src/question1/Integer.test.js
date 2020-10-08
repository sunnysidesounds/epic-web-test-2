import {Integer} from './Integer.js'


test('toBaseNString pass alphabet value', () => {
  expect(Integer.toBaseNString("abcd", "abc"))
      .toBe("NaN");
});

test('toBaseNString pass special-character value', () => {
  expect(Integer.toBaseNString("!@#$#", "#$%$#"))
      .toBe("NaN");
});

test('toBaseNString pass no value', () => {
  expect(Integer.toBaseNString("", ""))
      .toBe("NaN");
});

test('toBaseNString base 10 to base 2', () => {
  expect(Integer.toBaseNString("123456789", "2"))
      .toBe("111010110111100110100010101");
});

test('toBaseNString base 10 to base 3', () => {
  expect(Integer.toBaseNString("123", "3"))
      .toBe("11120");
});

test('toBaseNString base 10 to base 4', () => {
  expect(Integer.toBaseNString("123", "4"))
      .toBe("1323");
});

test('toBaseNString base 10 to base 5', () => {
  expect(Integer.toBaseNString("123", "5"))
      .toBe("443");
});

test('toBaseNString base 10 to base 6', () => {
  expect(Integer.toBaseNString("123", "6"))
      .toBe("323");
});

test('toBaseNString base 10 to base 7', () => {
  expect(Integer.toBaseNString("123", "7"))
      .toBe("234");
});

test('toBaseNString base 10 to base 8', () => {
  expect(Integer.toBaseNString("12345678912345678", "8"))
      .toBe("536705213605153116");
});

test('toBaseNString base 10 to base 16', () => {
  expect(Integer.toBaseNString("12345678912345678", "16"))
      .toBe("2bdc545e14d64e");
});

test('toBaseNString base 10 to base 36', () => {
  expect(Integer.toBaseNString("123456789", "36"))
      .toBe("21i3v9");
});

test('toBaseNString base 10 to base 48', () => {
  expect(Integer.toBaseNString("123456789", "48"))
      .toBe("ncfwl");
});