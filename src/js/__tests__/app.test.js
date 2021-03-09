import ArrayBufferConverter from '../app';
import getBuffer from '../getBuffer';


test('test ArrayBufferConverter', () => {
  const testConverter = new ArrayBufferConverter();
  testConverter.load(getBuffer());
  expect(testConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
