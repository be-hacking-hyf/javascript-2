describe(`findByKey: returns the requested key/value pair, or an informative error`, () => {
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
        const result = object.findByKey(arg);
        assert.ok(result instanceof TypeError);
        assert.strictEqual(result.message, 'findByKey: key should be a string');
      });
    });
  });
  describe(`returns a ReferenceError if the key does not exist in the object`, () => {
    ['a', 'b', 'c', 'd'].forEach(arg => {
      it(`${arg}`, () => {
        const result = object.findByKey(arg);
        assert.ok(result instanceof ReferenceError);
        assert.strictEqual(result.message, `findByKey: no property "${arg}" in this.entries`);
      });
    });
  });
  const expectedValues = [
    ['firstKey', { firstKey: 'firstValue' }],
    ['secondKey', { secondKey: 'secondValue' }],
    ['thirdKey', { thirdKey: 'thirdValue' }],
    ['fourthKey', { fourthKey: 'fourthValue' }],
  ];
  describe(`otherwise returns an object containing the requested key/value pair`, () => {
    expectedValues.forEach(arg => {
      it(`object.findByKey(${arg[0]});`, () => {
        const result = object.findByKey(arg[0]);
        assert.deepStrictEqual(result, arg[1]);
      });
    });
  });
});
