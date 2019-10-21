describe(`negativeStrings: should return all negative strings`, () => {
  it(`when there are only NaNy strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = [];
    const result = object.negativeStrings();
    assert.deepStrictEqual(result, []);
  });
  it(`when there are not any NaNy strings`, () => {
    object.NaNyStrings = [];
    object.numberyStrings = ['-3', '6', '-4', '5'];
    const result = object.negativeStrings();
    assert.deepStrictEqual(result, ['-3', '-4']);
  });
  it(`when there are NaNy and numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['3', '-6', '4', '-5'];
    const result = object.negativeStrings();
    assert.deepStrictEqual(result, ['-6', '-5']);
  });
  it(`when there are no negative numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['-2', '-7', '9', '5'];
    const result = object.negativeStrings();
    assert.deepStrictEqual(result, ['-2', '-7']);
  });
  it(`when there are only negative numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['4', '6', '', '-2'];
    const result = object.negativeStrings();
    assert.deepStrictEqual(result, ['-2']);
  });
});
