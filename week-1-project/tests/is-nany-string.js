describe('isNumberyString: checks if its argument is a numbery string', () => {

  describe(`it returns false if the argument is not a string`, () => {
    [true, null, undefined, 0, {}, [], () => { }].forEach(thing => {
      it(`returns false for ${typeof thing}s`, () => {
        const isString = object.isNumberyString(thing);
        assert.strictEqual(isString, false);
      });
    });
  });


  describe(`it returns false if the argument is a string that casts to NaN`, () => {
    ['hi!', 'roadwork', ':', '1.0.0', 'Number'].forEach(thing => {
      it(`returns false for ${thing}`, () => {
        const isNumberyString = object.isNumberyString(thing);
        assert.strictEqual(isNumberyString, false);
      });
    });
  });

  describe(`it returns true for numbery strings`, () => {
    ['100', '', '1e5', '-0', 'Infinity'].forEach(thing => {
      it(`returns true for ${thing}`, () => {
        const isNumberyString = object.isNumberyString(thing);
        assert.strictEqual(isNumberyString, true);
      });
    });
  });

});
