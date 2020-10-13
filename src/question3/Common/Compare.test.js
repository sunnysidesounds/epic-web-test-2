import Compare from "./Compare";


test('compareByName: sort by name', () => {
  const input_value = [
    {id: 2, name: "Wilbert Sambrano", email: "InDatabase2@epicgames.com", birthday: "1984-02-12T00:00:00.000Z", balance: 800},
    {id: 5, name: "Joaquina Schwalb", email: "InDatabase5@epicgames.com", birthday: "1975-12-22T00:00:00.000Z", balance: 800},
    {id: 1, name: "Beryl Widener", email: "InDatabase2@epicgames.com", birthday: "1986-12-31T00:00:00.000Z", balance: 500},
    {id: 14, name: "Alona Shane", email: "InDatabase14@epicgames.com", birthday: "1980-10-31T00:00:00.000Z", balance: 1250}
  ]
  const output_value = [
    {id: 14, name: "Alona Shane", email: "InDatabase14@epicgames.com", birthday: "1980-10-31T00:00:00.000Z", balance: 1250},
    {id: 1, name: "Beryl Widener", email: "InDatabase2@epicgames.com", birthday: "1986-12-31T00:00:00.000Z", balance: 500},
    {id: 5, name: "Joaquina Schwalb", email: "InDatabase5@epicgames.com", birthday: "1975-12-22T00:00:00.000Z", balance: 800},
    {id: 2, name: "Wilbert Sambrano", email: "InDatabase2@epicgames.com", birthday: "1984-02-12T00:00:00.000Z", balance: 800},

  ]
  expect(Compare.compareByName(input_value))
      .toStrictEqual(output_value);
});


test('compareByEmail: sort by email', () => {
  const input_value = [
    {id: 2, name: "Wilbert Sambrano", email: "InDatabase2@epicgames.com", birthday: "1984-02-12T00:00:00.000Z", balance: 800},
    {id: 5, name: "Joaquina Schwalb", email: "InDatabase5@epicgames.com", birthday: "1975-12-22T00:00:00.000Z", balance: 800},
    {id: 1, name: "Beryl Widener", email: "InDatabase1@epicgames.com", birthday: "1986-12-31T00:00:00.000Z", balance: 500},
    {id: 14, name: "Alona Shane", email: "InDatabase14@epicgames.com", birthday: "1980-10-31T00:00:00.000Z", balance: 1250}
  ]
  const output_value = [
    {id: 14, name: "Alona Shane", email: "InDatabase14@epicgames.com", birthday: "1980-10-31T00:00:00.000Z", balance: 1250},
    {id: 1, name: "Beryl Widener", email: "InDatabase1@epicgames.com", birthday: "1986-12-31T00:00:00.000Z", balance: 500},
    {id: 2, name: "Wilbert Sambrano", email: "InDatabase2@epicgames.com", birthday: "1984-02-12T00:00:00.000Z", balance: 800},
    {id: 5, name: "Joaquina Schwalb", email: "InDatabase5@epicgames.com", birthday: "1975-12-22T00:00:00.000Z", balance: 800},

  ]
  expect(Compare.compareByEmail(input_value))
      .toStrictEqual(output_value);
});

test('compareByDob: sort by dob', () => {
  const input_value = [
    {id: 2, name: "Wilbert Sambrano", email: "InDatabase2@epicgames.com", birthday: "1984-02-12T00:00:00.000Z", balance: 800},
    {id: 5, name: "Joaquina Schwalb", email: "InDatabase5@epicgames.com", birthday: "1975-12-22T00:00:00.000Z", balance: 800},
    {id: 1, name: "Beryl Widener", email: "InDatabase1@epicgames.com", birthday: "1986-12-31T00:00:00.000Z", balance: 500},
    {id: 14, name: "Alona Shane", email: "InDatabase14@epicgames.com", birthday: "1980-10-31T00:00:00.000Z", balance: 1250}
  ]
  const output_value = [
    {id: 5, name: "Joaquina Schwalb", email: "InDatabase5@epicgames.com", birthday: "1975-12-22T00:00:00.000Z", balance: 800},
    {id: 14, name: "Alona Shane", email: "InDatabase14@epicgames.com", birthday: "1980-10-31T00:00:00.000Z", balance: 1250},
    {id: 2, name: "Wilbert Sambrano", email: "InDatabase2@epicgames.com", birthday: "1984-02-12T00:00:00.000Z", balance: 800},
    {id: 1, name: "Beryl Widener", email: "InDatabase1@epicgames.com", birthday: "1986-12-31T00:00:00.000Z", balance: 500},
  ]
  expect(Compare.compareByDob(input_value))
      .toStrictEqual(output_value);
});

test('compareByBalance: sort by balance', () => {
  const input_value = [
    {id: 2, name: "Wilbert Sambrano", email: "InDatabase2@epicgames.com", birthday: "1984-02-12T00:00:00.000Z", balance: 800},
    {id: 5, name: "Joaquina Schwalb", email: "InDatabase5@epicgames.com", birthday: "1975-12-22T00:00:00.000Z", balance: 800},
    {id: 1, name: "Beryl Widener", email: "InDatabase1@epicgames.com", birthday: "1986-12-31T00:00:00.000Z", balance: 500},
    {id: 14, name: "Alona Shane", email: "InDatabase14@epicgames.com", birthday: "1980-10-31T00:00:00.000Z", balance: 1250}
  ]
  const output_value = [
    {id: 1, name: "Beryl Widener", email: "InDatabase1@epicgames.com", birthday: "1986-12-31T00:00:00.000Z", balance: 500},
    {id: 2, name: "Wilbert Sambrano", email: "InDatabase2@epicgames.com", birthday: "1984-02-12T00:00:00.000Z", balance: 800},
    {id: 5, name: "Joaquina Schwalb", email: "InDatabase5@epicgames.com", birthday: "1975-12-22T00:00:00.000Z", balance: 800},
    {id: 14, name: "Alona Shane", email: "InDatabase14@epicgames.com", birthday: "1980-10-31T00:00:00.000Z", balance: 1250},


  ]
  expect(Compare.compareByBalance(input_value))
      .toStrictEqual(output_value);
});