import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  load(string) {
    this.buffer = getBuffer(string);
  }

  toString() {
    return String.fromCharCode(...new Uint16Array(this.buffer));
  }
}
