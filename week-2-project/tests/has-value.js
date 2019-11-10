describe(`hasValue: determines if an object has a given value`, () => {
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
    it('{a:3} has 3', () => {
      const result = object.hasValue({ a: 3 }, 3);
      assert.strictEqual(result, true);
    });
    it('{a:3} does not have 4', () => {
      const result = object.hasValue({ a: 3 }, 4);
      assert.strictEqual(result, false);
    });
    it('{x:4} has 4', () => {
      const result = object.hasValue({ x: 4 }, 4);
      assert.strictEqual(result, true);
    });
    it('{x:4} does not have 5', () => {
      const result = object.hasValue({ x: 4 }, 5);
      assert.strictEqual(result, false);
    });
  });
  describe(`it returns true for entry values`, () => {
    ['firstValue', 'secondValue', 'thirdValue', 'fourthValue'].forEach(arg => {
      it(arg, () => {
        const result = object.hasValue(object.entries, arg);
        assert.strictEqual(result, true);
      });
    });
  });
  describe(`and returns false for non-entry values.`, () => {
    ['tomato', null, true, undefined, 4].forEach(arg => {
      it(`${arg}`, () => {
        const result = object.hasValue(object.entries, arg);
        assert.strictEqual(result, false);
      });
    });
  });
  describe(`even when there are no entries!`, () => {
    before(() => {
      object.entries = {};
    });
    ['tomato', null, true, undefined, 4].forEach(arg => {
      const argString = typeof arg === 'string' ? '"' + arg + '"' : String(arg);
      it(argString, () => {
        const result = object.hasValue(object.entries, arg);
        assert.strictEqual(result, false);
      });
    });
  });
});
