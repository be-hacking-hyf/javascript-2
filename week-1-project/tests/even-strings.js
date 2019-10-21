describe(`evenStrings: should return all even strings`, () => {
  it(`when there are only NaNy strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = [];
    const result = object.evenStrings();
    assert.deepStrictEqual(result, []);
  });
  it(`when there are not any NaNy strings`, () => {
    object.NaNyStrings = [];
    object.numberyStrings = ['3', '6', '4', '5'];
    const result = object.evenStrings();
    assert.deepStrictEqual(result, ['6', '4']);
  });
  it(`when there are NaNy and numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['3', '6', '4', '5'];
    const result = object.evenStrings();
    assert.deepStrictEqual(result, ['6', '4']);
  });
  it(`when there are no even numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['3', '7', '9', '5'];
    const result = object.evenStrings();
    assert.deepStrictEqual(result, []);
  });
  it(`when there are only even numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['4', '6', '', '-2'];
    const result = object.evenStrings();
    assert.deepStrictEqual(result, ['4', '6', '', '-2']);
  });
});
