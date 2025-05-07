import promise from '../object';

jest.setTimeout(20000);

test('check promise', async () => {
    const resTest = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const result = await promise;
    expect(result).toEqual(resTest);
    // done();
});

test('check promise error', async () => {
  try {
    const result = await promise;
  } catch (e) {
    expect(e.name).toEqual(`Файл не загрузился: ${e.message}`);
  }
});
