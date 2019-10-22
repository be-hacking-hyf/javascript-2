describe(`addString: should sort strings by NaNyness`, () => {
  before(() => {
    object.numberyStrings = [];
    object.NaNyStrings = [];
  });

  describe(`if the argument is not a string`, () => {
    it(`it returns false`, () => {
      const result = object.addString(true);
      assert.strictEqual(result, false);
    });
    it(`it doesn't push to this.numberyStrings`, () => {
      assert.deepStrictEqual(object.numberyStrings, []);
    });
    it(`it doesn't push to this.NaNyStrings`, () => {
      assert.deepStrictEqual(object.NaNyStrings, []);
    });
  });

  describe(`if the argument is a string`, () => {
    it(`it returns true`, () => {
      const result = object.addString('');
      assert.strictEqual(result, true);
    });
    it(`it pushes NaNny strings to this.NaNyStrings`, () => {
      object.addString('hi!');
      assert.deepStrictEqual(object.NaNyStrings, ['hi!']);
    });
    it(`it pushes numbery strings to this.numberyStrings`, () => {
      object.addString('3');
      assert.deepStrictEqual(object.numberyStrings, ['', '3']);
    });
  });
});
