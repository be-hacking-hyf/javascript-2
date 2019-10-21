describe(`set currentEntry: set the value of this.currentKey if the argument is valid`, () => {
  before(() => {
    object.entries = {};
    [
      ['firstKey', 'firstValue'],
      ['secondKey', 'secondValue'],
      ['thirdKey', 'thirdValue'],
      ['fourthKey', 'fourthValue']
    ].forEach(newEntry => object.entries[newEntry[0]] = newEntry[1]);
  });
  describe(`throws a TypeError if the argument is not a string`, () => {
    [0, true, null, undefined, [], {}, function () { }, () => { }].forEach(arg => {
      it(`${typeof arg}`, () => {
        assert.throws(
          () => { object.currentEntry = arg },
          TypeError
        );
      });
    });
  });
  describe(`throws a ReferenceError if the argument is not a key in this.entries`, () => {
    ['a', 'b', 'c', 'd'].forEach(arg => {
      it(`${arg}`, () => {
        assert.throws(
          () => { object.currentEntry = arg },
          ReferenceError
        );
      });
    });
  });
  describe(`if the argument is valid, it sets this.currentKey to the arg`, () => {
    ['firstKey', 'secondKey', 'thirdKey', 'fourthKey'].forEach(arg => {
      it(`${arg}`, () => {
        object.currentEntry = arg;
        assert.strictEqual(object.currentKey, arg);
      });
    });
  });
});
