describe(`updateEntry: should add a new key/value pair to this.entries`, () => {
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
        const result = object.updateEntry(arg, '')
        assert.ok(result instanceof TypeError);
        assert.strictEqual(result.message, 'updateEntry: key should be a string');
      });
    });
  });
  describe(`returns a TypeError if the second argument is not a primitive`, () => {
    [[], {}, function () { }, () => { }].forEach(arg => {
      it(`first argument is: ${arg.constructor.name}`, () => {
        const result = object.updateEntry('', arg);
        assert.ok(result instanceof TypeError);
        assert.strictEqual(result.message, 'updateEntry: value should be a primitive');
      });
    });
  });
  describe(`returns a ReferenceError if the key does not exist in this.entries`, () => {
    ['tomato', 'potato', 'patate', 'pomme'].forEach(arg => {
      it(`${arg}`, () => {
        const result = object.updateEntry(arg, '');
        assert.ok(result instanceof ReferenceError);
        assert.strictEqual(result.message, `updateEntry: no property "${arg}" in this.entries`);
      });
    });
  });
  const valuesToUpdate = [['firstKey', 0], ['secondKey', null], ['thirdKey', false], ['fourthKey', undefined]];
  describe(`returns true if all the arguments are valid ...`, () => {
    valuesToUpdate.forEach(arg => {
      it(`set key "${arg[0]}" to value ${arg[1]}`, () => {
        const result = object.updateEntry(...arg);
        assert.strictEqual(result, true);
      });
    });
  });
  describe(`... and actually adds the entries!`, () => {
    valuesToUpdate.forEach(arg => {
      it(`object.entries.${arg[0]} === ${arg[1]}`, () => {
        assert.strictEqual(object.entries[arg[0]], arg[1]);
      });
    });
  });
});
