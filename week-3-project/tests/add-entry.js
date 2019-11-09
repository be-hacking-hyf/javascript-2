describe(`addEntry: should add a new key/value pair to this.entries`, () => {
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
        const result = object.addEntry(arg, '')
        assert.ok(result instanceof TypeError);
        assert.strictEqual(result.message, 'addEntry: key should be a string');
      });
    });
  });
  describe(`returns a TypeError if the second argument is not a primitive`, () => {
    [[], {}, function () { }, () => { }].forEach(arg => {
      it(`first argument is: ${arg.constructor.name}`, () => {
        const result = object.addEntry('', arg);
        assert.ok(result instanceof TypeError);
        assert.strictEqual(result.message, 'addEntry: value should be a primitive');
      });
    });
  });
  describe(`returns an Error if the key already exists in this.entries`, () => {
    ['firstKey', 'secondKey', 'thirdKey', 'fourthKey'].forEach(arg => {
      it(`${arg}`, () => {
        const result = object.addEntry(arg, '');
        assert.ok(result instanceof Error);
        assert.strictEqual(result.message, `addEntry: key "${arg}" already exists`);
      });
    });
  });
  const valuesToAdd = [['a', 0], ['b', 1], ['c', 2], ['d', 3]];
  describe(`returns true if all the arguments are valid ...`, () => {
    valuesToAdd.forEach(arg => {
      it(`${arg[0]}: ${arg[1]}`, () => {
        const result = object.addEntry(...arg);
        assert.strictEqual(result, true);
      });
    });
  });
  describe(`... and actually adds the entries!`, () => {
    valuesToAdd.forEach(arg => {
      it(`object.entries.${arg[0]} === ${arg[1]}`, () => {
        assert.strictEqual(object.entries[arg[0]], arg[1]);
      });
    });
  });
});
