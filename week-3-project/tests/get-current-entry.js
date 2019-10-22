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
});
