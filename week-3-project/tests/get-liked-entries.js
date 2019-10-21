describe(`get likedEntries: get all of the entries with the keys in this.likedKeys`, () => {
  before(() => {
    object.entries = {};
    [
      ['firstKey', 'firstValue'],
      ['secondKey', 'secondValue'],
      ['thirdKey', 'thirdValue'],
      ['fourthKey', 'fourthValue']
    ].forEach(newEntry => object.entries[newEntry[0]] = newEntry[1]);
  });
  describe(`returns an object containing only the liked entries`, () => {
    it(`when the second and fourth are liked`, () => {
      object.likedKeys = ['secondKey', 'fourthKey'];
      const likedEntries = object.likedEntries;
      assert.deepStrictEqual(likedEntries, { secondKey: 'secondValue', fourthKey: 'fourthValue' });
    });
    it(`when the first and third are liked`, () => {
      object.likedKeys = ['firstKey', 'thirdKey'];
      const likedEntries = object.likedEntries;
      assert.deepStrictEqual(likedEntries, { firstKey: 'firstValue', thirdKey: 'thirdValue' });
    });
  });
  describe(`liked entries that have been removed will have errors as values`, () => {
    it(`when first & second keys are liked, then the first is removed`, () => {
      object.likedKeys = ['firstKey', 'secondKey'];
      object.removeEntry('firstKey');
      const likedEntries = object.likedEntries;
      assert.ok(likedEntries.firstKey instanceof ReferenceError, 'firstKey should contain a ReferenceError');
      assert.strictEqual(likedEntries.secondKey, 'secondValue');
    });
    it(`when third & fourth keys are liked, then the fourth is removed`, () => {
      object.likedKeys = ['thirdKey', 'fourthKey'];
      object.removeEntry('fourthKey');
      const likedEntries = object.likedEntries;
      assert.ok(likedEntries.fourthKey instanceof ReferenceError, 'fourthKey should contain a ReferenceError');
      assert.strictEqual(likedEntries.thirdKey, 'thirdValue');
    });
  });
});
