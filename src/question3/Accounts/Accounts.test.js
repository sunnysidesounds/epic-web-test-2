import axios from 'axios';

export const API = '';
export const getData = async query => {
  const url = `${API}/${query}`;
  return await axios.get(url);
};

export const putData = async query => {
  const url = `${API}/${query}`;
  return await axios.put(url);
};

export const postData = async query => {
  const url = `${API}/${query}`;
  return await axios.post(url);
};

export const deleteData = async query => {
  const url = `${API}/${query}`;
  return await axios.delete(url);
};

jest.mock('axios');

describe('test getAll: Get all accounts ', () => {
  it('fetches successfully all accounts data from an API', async () => {
    const data = { accounts: [
      {
        id: 1,
        name: "TestUser1",
        email: "inDatabase1@epicgames.com",
        birthday: "2012-04-05T07:00:00.000Z",
        balance: 2000
      },
      {
        id: 2,
        name: "TestUser2",
        email: "inDatabase2@epicgames.com",
        birthday: "2012-04-05T07:00:00.000Z",
        balance: 2000
      }
    ]
  }
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getData('accounts')).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
        `${API}/accounts`,
    );
  });

});

describe('test getById: Get account by id', () => {
  it('fetches successfully accounts data from an API', async () => {
    const data = { accounts: [
        {
          id: 1,
          name: "TestUser1",
          email: "inDatabase1@epicgames.com",
          birthday: "2012-04-05T07:00:00.000Z",
          balance: 2000
        }
      ]
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getData('accounts/1')).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
        `${API}/accounts/1`,
    );
  });

});

describe('test updateAccount: Update account by id', () => {
  it('fetches successfully accounts data from an API', async () => {
    const data = { accounts: [
        {
          id: 1,
          name: "TestUser1",
          email: "inDatabase1@epicgames.com",
          birthday: "2012-04-05T07:00:00.000Z",
          balance: 5000
        }
      ]
    }
    axios.put.mockImplementationOnce(() => Promise.resolve(data));
    await expect(putData('accounts/1')).resolves.toEqual(data);
    expect(axios.put).toHaveBeenCalledWith(
        `${API}/accounts/1`,
    );
  });

});

describe('test newAccount: create new account', () => {
  it('fetches successfully accounts data from an API', async () => {
    const data = { accounts: [
        {
          id: 10,
          name: "TestUser10",
          email: "inDatabase1@epicgames.com",
          birthday: "2012-04-05T07:00:00.000Z",
          balance: 5000
        }
      ]
    }
    axios.post.mockImplementationOnce(() => Promise.resolve(data));
    await expect(postData('accounts/10')).resolves.toEqual(data);
    expect(axios.post).toHaveBeenCalledWith(
        `${API}/accounts/10`,
    );
  });

});

describe('test deleteAccount: delete account by id', () => {
  it('fetches successfully accounts data from an API', async () => {
    const data = { accounts: [
        {
          id: 10,
          name: "DeleteTestUser10",
          email: "inDatabase1@epicgames.com",
          birthday: "2012-04-05T07:00:00.000Z",
          balance: 5000
        }
      ]
    }
    axios.delete.mockImplementationOnce(() => Promise.resolve(data));
    await expect(deleteData('accounts/10')).resolves.toEqual(data);
    expect(axios.delete).toHaveBeenCalledWith(
        `${API}/accounts/10`,
    );
  });

});