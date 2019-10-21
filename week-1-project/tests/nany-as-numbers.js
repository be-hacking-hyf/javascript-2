describe(`NaNyAsNumbers: returns all NaNy strings as numbers`, () => {
  it(`when there are only NaNy strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!', '--4'];
    object.numberyStrings = [];
    const result = object.NaNyAsNumbers();
    result.forEach(entry => assert.ok(entry !== entry));
  });
  it(`when there are not any NaNy strings`, () => {
    object.NaNyStrings = [];
    object.numberyStrings = ['3', '6', '4', '5'];
    const result = object.NaNyAsNumbers();
    result.forEach(entry => assert.ok(entry !== entry));
  });
  it(`when there are NaNy and numbery strings`, () => {
    object.NaNyStrings = ['hi!', '<--:-->', 'bye!'];
    object.numberyStrings = ['-3', '6.5', '4', '5'];
    const result = object.NaNyAsNumbers();
    result.forEach(entry => assert.ok(entry !== entry));
  });
  it(`when there are no odd numbery strings`, () => {
    object.NaNyStrings = ['NaN', 'hi!', 'bye!'];
    object.numberyStrings = ['2', '', '6', '-4'];
    const result = object.NaNyAsNumbers();
    result.forEach(entry => assert.ok(entry !== entry));
  });
  it(`when there are only odd numbery strings`, () => {
    object.NaNyStrings = ['hi!', 'bye!', '||'];
    object.numberyStrings = ['-3', '1', '9', '7', '1e3'];
    const result = object.NaNyAsNumbers();
    result.forEach(entry => assert.ok(entry !== entry));
  });
});
