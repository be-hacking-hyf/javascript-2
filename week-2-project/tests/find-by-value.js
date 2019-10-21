describe(`findByValue: returns the requested key/value pair, or an informative error`, () => {
  before(() => {
    object.entries = {};
    [
      ['firstKey', 'firstValue'],
      ['secondKey', 'secondValue'],
      ['thirdKey', 'thirdValue'],
      ['fourthKey', 'fourthValue']
    ].forEach(newEntry => object.entries[newEntry[0]] = newEntry[1]);
  });
  describe(`returns a TypeError if the first argument is not a primitive`, () => {
    [[], {}, function () { }, () => { }].forEach(arg => {
      it(`first argument is: ${typeof arg}`, () => {
        const result = object.findByValue(arg);
        assert.ok(result instanceof TypeError);
        assert.strictEqual(result.message, 'findByValue: value should be a primitive');
      });
    });
  });
  describe(`returns a ReferenceError if the value does not exist in the object`, () => {
    [0, 1, true, false, null, undefined, 'hi!'].forEach(arg => {
      it(`${arg}`, () => {
        const result = object.findByValue(arg);
        assert.ok(result instanceof ReferenceError);
        assert.strictEqual(result.message, `findByValue: no entry with value (${typeof arg}, ${arg})`);
      });
    });
  });
  const expectedValues = [
    ['firstValue', { firstKey: 'firstValue' }],
    ['secondValue', { secondKey: 'secondValue' }],
    ['thirdValue', { thirdKey: 'thirdValue' }],
    ['fourthValue', { fourthKey: 'fourthValue' }],
  ];
  describe(`otherwise returns an object containing the requested key/value pair`, () => {
    expectedValues.forEach(arg => {
      it(`object.findByValue("${arg[0]}");`, () => {
        const result = object.findByValue(arg[0]);
        assert.deepStrictEqual(result, arg[1]);
      });
    });
  });
});
