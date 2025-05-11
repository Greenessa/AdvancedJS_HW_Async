import promise from '../object';
import read from "../reader";
import json from "../parser";

jest.setTimeout(20000);

// test('check promise', async () => {
//     const resTest = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
//     const result = await promise;
//     expect(result).toEqual(resTest);
//     // done();
// });


jest.mock('../reader');
jest.mock('../parser');

beforeEach(() => {
  jest.resetAllMocks();
  });


test('should check promise', async () => {
    const resTest = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    read.mockResolvedValue(resTest);
    json.mockResolvedValue(resTest);
    await expect(promise).resolves.toEqual(resTest);
})

test('should check error', async () => {
  read.mockRejectedValueOnce(new Error('error message'));
  json.mockRejectedValueOnce(new Error('error message'));
  await expect(promise).rejects.toMatch('error');
})

