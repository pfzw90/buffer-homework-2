import ArrayBufferConverter from '../app';


test('test ArrayBufferConverter', () => {
  const testConverter = new ArrayBufferConverter();
  testConverter.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  expect(testConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
