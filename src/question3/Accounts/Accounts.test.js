import axios from 'axios';

export const makeEndpointCall = async (verb, query) => {
  const url = `/${query}`;
  switch(verb){
    case 'get':
      return await axios.get(url);
    case 'put':
      return await axios.put(url);
    case 'post':
      return await axios.post(url);
    case 'delete':
      return await axios.delete(url);
    default:
      return await axios.get(url);
  }
}

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
    await expect(makeEndpointCall('get','accounts')).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
        `/accounts`,
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
    await expect(makeEndpointCall('get','accounts/1')).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
        `/accounts/1`,
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
    await expect(makeEndpointCall('put','accounts/1')).resolves.toEqual(data);
    expect(axios.put).toHaveBeenCalledWith(
        `/accounts/1`,
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
    await expect(makeEndpointCall('post','accounts/10')).resolves.toEqual(data);
    expect(axios.post).toHaveBeenCalledWith(
        `/accounts/10`,
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
    await expect(makeEndpointCall('delete', 'accounts/10')).resolves.toEqual(data);
    expect(axios.delete).toHaveBeenCalledWith(
        `/accounts/10`,
    );
  });

});