describe(`likeEntry: adds a key to the this.likedKeys if it is valid`, () => {
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
        const result = object.likeEntry(arg);
        assert.ok(result instanceof TypeError);
        assert.strictEqual(result.message, 'likeEntry: key should be a string');
      });
    });
  });
  describe(`returns a ReferenceError if the argument is not a key in this.entries`, () => {
    ['a', 'b', 'c', 'd'].forEach(arg => {
      it(`${arg}`, () => {
        const result = object.likeEntry(arg);
        assert.ok(result instanceof ReferenceError);
        assert.strictEqual(result.message, `likeEntry: key "${arg}" has been removed`);
      });
    });
  });
  describe(`returns an Error if the key is already liked`, () => {
    ['firstKey', 'secondKey'].forEach(arg => {
      it(arg, () => {
        const result = object.likeEntry(arg);
        assert.ok(result instanceof Error, 'result should be an Error   ');
        assert.strictEqual(result.message, `likeEntry: key "${arg}" is already liked`);
      });
    });
  });
  describe(`returns true if the key was successfully added ... `, () => {
    ['thirdKey', 'fourthKey'].forEach(arg => {
      it(arg, () => {
        const result = object.likeEntry(arg);
        assert.strictEqual(result, true);
      });
    });
  });
  describe(`... and actually adds the new keys!`, () => {
    ['thirdKey', 'fourthKey'].forEach(arg => {
      it(arg, () => {
        assert.ok(object.likedKeys.indexOf(arg) + 1);
      });
    });
  });
});
