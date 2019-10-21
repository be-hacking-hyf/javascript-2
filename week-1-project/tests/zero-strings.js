describe(`zeroStrings: should return all zero strings`, () => {
  it(`when there are only NaNy strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = [];
    const result = object.zeroStrings();
    assert.deepStrictEqual(result, []);
  });
  it(`when there are not any NaNy strings`, () => {
    object.NaNyStrings = [];
    object.numberyStrings = ['-3', '', '-4', '0.0'];
    const result = object.zeroStrings();
    assert.deepStrictEqual(result, ['', '0.0']);
  });
  it(`when there are NaNy and numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['+0', '3', '-6', '4', '-5', '-0'];
    const result = object.zeroStrings();
    assert.deepStrictEqual(result, ['+0', '-0']);
  });
  it(`when there are no zero numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['-2', '-7', '9', '5'];
    const result = object.zeroStrings();
    assert.deepStrictEqual(result, []);
  });
  it(`when there are only zero numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['4', '6', '', '-2'];
    const result = object.zeroStrings();
    assert.deepStrictEqual(result, ['']);
  });
});
