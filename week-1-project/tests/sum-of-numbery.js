describe(`sumOfNumbery: returns the sum of numberys`, () => {
  it(`when there are only NaNy strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = [];
    const result = object.sumOfNumbery();
    assert.strictEqual(result, 0);
  });
  it(`when there are not any NaNy strings`, () => {
    object.NaNyStrings = [];
    object.numberyStrings = ['3', '6', '4', '5'];
    const result = object.sumOfNumbery();
    assert.strictEqual(result, 18);
  });
  it(`when there are NaNy and numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['1.3', '6', '40', ''];
    const result = object.sumOfNumbery();
    assert.strictEqual(result, 47.3);
  });
  it(`when there are no odd numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['2', '', '6', '-4'];
    const result = object.sumOfNumbery();
    assert.strictEqual(result, 4);
  });
  it(`when there are only odd numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!'];
    object.numberyStrings = ['-3', '1', '9', '7'];
    const result = object.sumOfNumbery();
    assert.strictEqual(result, 14);
  });
});
