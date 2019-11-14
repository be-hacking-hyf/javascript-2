describe(`removeEntry: should remove a key/value pair from this.entries`, () => {
  before(() => {
    object.entries = {};
    [
      ['firstKey', 'firstValue'],
      ['secondKey', 'secondValue'],
      ['thirdKey', 'thirdValue'],
      ['fourthKey', 'fourthValue']
    ].forEach(newEntry => object.entries[newEntry[0]] = newEntry[1]);
  });
  describe(`returns a TypeError if the first argument is not a string`, () => {
    [0, true, null, undefined, [], {}, function () { }, () => { }].forEach(arg => {
      it(`first argument is: ${typeof arg}`, () => {
        const result = object.removeEntry(arg);
        assert.ok(result instanceof TypeError);
        assert.strictEqual(result.message, 'removeEntry: key should be a string');
      });
    });
  });
  describe(`returns a ReferenceError if the key does not exist in this.entries`, () => {
    ['tomato', 'potato', 'patate', 'pomme de terre'].forEach(arg => {
      it(`${arg}`, () => {
        const result = object.removeEntry(arg);
        assert.ok(result instanceof Error);
        assert.strictEqual(result.message, `removeEntry: no property "${arg}" in this.entries`);
      });
    });
  });
  const valuesToRemove = ['firstKey', 'secondKey', 'thirdKey', 'fourthKey'];
  describe(`returns true if all the arguments are valid ...`, () => {
    valuesToRemove.forEach(arg => {
      it(`key to remove: ${arg}`, () => {
        const result = object.removeEntry(arg);
        assert.strictEqual(result, true);
      });
    });
  });
  describe(`... and actually removes the entries!`, () => {
    valuesToRemove.forEach(arg => {
      it(`object.hasKey(object.entries, ${arg}) === false`, () => {
        assert.strictEqual(object.entries.hasOwnProperty(arg), false);
      });
    });
  });
});
