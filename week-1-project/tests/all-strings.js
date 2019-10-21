describe('allStrings: should return all saved strings', () => {
  it(`it returns all numbery strings, if there are no NaNy strings`, () => {
    object.numberyStrings = ['3', '4', '5'];
    object.NaNyStrings = [];
    const result = object.allStrings();
    assert.deepStrictEqual(result, ['3', '4', '5']);
  });

  it(`it returns all NaNy strings, if there are no numbery strings`, () => {
    object.numberyStrings = [];
    object.NaNyStrings = ['h', 'i', '!'];
    const result = object.allStrings();
    assert.deepStrictEqual(result, ['h', 'i', '!']);
  });

  it(`the numbery strings are first, if there are both`, () => {
    object.numberyStrings = ['3', '4', '5'];
    object.NaNyStrings = ['h', 'i', '!'];
    const result = object.allStrings();
    assert.deepStrictEqual(result, ['3', '4', '5', 'h', 'i', '!']);
  });
});
