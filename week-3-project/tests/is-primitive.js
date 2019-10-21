describe(`isPrimitive: determines if a value is a primitive or not`, () => {
  describe(`returns true for primitives`, () => {
    [0, true, null, undefined, ''].forEach(arg => {
      it(`${typeof arg}`, () => {
        const result = object.isPrimitive(arg);
        assert.strictEqual(result, true);
      });
    });
  });
  describe(`returns false for non-primitives`, () => {
    [function () { }, () => { }, {}, [], new Map(), new Set()].forEach(arg => {
      it(`${arg.constructor.name}`, () => {
        const result = object.isPrimitive(arg);
        assert.strictEqual(result, false);
      });
    });
  });
});
