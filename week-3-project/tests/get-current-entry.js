describe(`get currentEntry: get the value of this.currentKey if the argument is valid`, () => {
  before(() => {
    object.entries = {};
    [
      ['firstKey', 'firstValue'],
      ['secondKey', 'secondValue'],
      ['thirdKey', 'thirdValue'],
      ['fourthKey', 'fourthValue']
    ].forEach(newEntry => object.entries[newEntry[0]] = newEntry[1]);
  });
  describe(`it returns the entry with key this.currentKey`, () => {
    [
      ['firstKey', 'firstValue'],
      ['secondKey', 'secondValue'],
      ['thirdKey', 'thirdValue'],
      ['fourthKey', 'fourthValue']
    ].forEach(arg => {
      it(`${arg[0]}`, () => {
        object.currentKey = arg[0];
        assert.deepStrictEqual(object.currentEntry, { [arg[0]]: arg[1] });
      });
    });
  });
  describe(`if the current entry has been removed, return the key with it's error`, () => {
    [
      'firstKey',
      'secondKey',
      'thirdKey',
      'fourthKey',
    ].forEach(key => {
      it(`${key}`, () => {
        delete object.entries[key];
        object.currentKey = key;
        assert.deepStrictEqual(object.currentEntry[key].message, `findByKey: no property "${key}" in this.entries`);
      });
    });
  });
});
