describe(`hasKey: determines if an object has a given key`, () => {
  before(() => {
    object.entries = {};
    [
      ['firstKey', 'firstValue'],
      ['secondKey', 'secondValue'],
      ['thirdKey', 'thirdValue'],
      ['fourthKey', 'fourthValue']
    ].forEach(newEntry => object.entries[newEntry[0]] = newEntry[1]);
  });
  describe(`it is a pure function that works with any arguments`, () => {
    it('{a:3} has "a"', () => {
      const result = object.hasKey({ a: 3 }, "a");
      assert.strictEqual(result, true);
    });
    it('{a:3} does not have "b"', () => {
      const result = object.hasKey({ a: 3 }, "b");
      assert.strictEqual(result, false);
    });
    it('{x:4} has "x"', () => {
      const result = object.hasKey({ x: 4 }, "x");
      assert.strictEqual(result, true);
    });
    it('{x:4} does not have "y"', () => {
      const result = object.hasKey({ x: 4 }, "y");
      assert.strictEqual(result, false);
    });
  });
  describe(`it returns true for existant entries`, () => {
    ['firstKey', 'secondKey', 'thirdKey', 'fourthKey'].forEach(arg => {
      it(arg, () => {
        const result = object.hasKey(object.entries, arg);
        assert.strictEqual(result, true);
      });
    });
  });
  describe(`and returns false for non-existant entries.`, () => {
    ['entries', 'hasKey', 'toSource', 'valueOf', 'hasOwnProperty', ''].forEach(arg => {
      it(arg, () => {
        const result = object.hasKey(object.entries, arg);
        console.log(result)
        assert.strictEqual(result, false);
      });
    });
  });
  describe(`or when there are no entries!`, () => {
    before(() => {
      object.entries = {};
    });
    ['entries', 'hasKey', 'toSource', 'valueOf', 'hasOwnProperty', ''].forEach(arg => {
      it(arg, () => {
        const result = object.hasKey(object.entries, arg);
        assert.strictEqual(result, false);
      });
    });
  });
});
