describe(`unlikeEntry: adds a key to the this.likedKeys if it is valid`, () => {
  before(() => {
    object.entries = {};
    [
      ['firstKey', 'firstValue'],
      ['secondKey', 'secondValue'],
      ['thirdKey', 'thirdValue'],
      ['fourthKey', 'fourthValue']
    ].forEach(newEntry => object.entries[newEntry[0]] = newEntry[1]);

    object.likedKeys = ['firstKey', 'secondKey'];
  });
  describe(`returns a TypeError if the argument is not a string`, () => {
    [0, true, null, undefined, [], {}, function () { }, () => { }].forEach(arg => {
      it(`first argument is: ${typeof arg}`, () => {
        const result = object.unlikeEntry(arg, '')
        assert.ok(result instanceof TypeError);
        assert.strictEqual(result.message, 'unlikeEntry: key should be a string');
      });
    });
  });
  describe(`returns an Error if the key is not in this.likedKeys`, () => {
    ['thirdKey', 'fourthKey'].forEach(arg => {
      it(arg, () => {
        const result = object.unlikeEntry(arg);
        assert.ok(result instanceof Error, 'result should be an Error   ');
        assert.strictEqual(result.message, `unlikeEntry: key "${arg}" is not in this.likedKeys`);
      });
    });
  });
  describe(`returns true if the key was successfully un-liked ... `, () => {
    ['firstKey', 'secondKey'].forEach(arg => {
      it(arg, () => {
        const result = object.unlikeEntry(arg);
        assert.strictEqual(result, true);
      });
    });
  });
  describe(`... and actually removes the keys!`, () => {
    ['thirdKey', 'fourthKey'].forEach(arg => {
      it(arg, () => {
        assert.strictEqual(object.likedKeys.indexOf(arg), -1);
      });
    });
  });
});
