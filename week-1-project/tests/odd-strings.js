describe(`oddStrings: should return all odd strings`, () => {
  it(`when there are only NaNy strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = [];
    const result = object.oddStrings();
    assert.deepStrictEqual(result, []);
  });
  it(`when there are not any NaNy strings`, () => {
    object.NaNyStrings = [];
    object.numberyStrings = ['3', '6', '4', '5'];
    const result = object.oddStrings();
    assert.deepStrictEqual(result, ['3', '5']);
  });
  it(`when there are NaNy and numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['3', '6', '4', '5'];
    const result = object.oddStrings();
    assert.deepStrictEqual(result, ['3', '5']);
  });
  it(`when there are no odd numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['2', '', '6', '-4'];
    const result = object.oddStrings();
    assert.deepStrictEqual(result, []);
  });
  it(`when there are only odd numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['-3', '1', '9', '7'];
    const result = object.oddStrings();
    assert.deepStrictEqual(result, ['-3', '1', '9', '7']);
  });
});
