describe(`readAll: should add a new key/value pair to this.entries`, () => {
  before(() => {
    object.entries = {};
    [
      ['firstKey', 'firstValue'],
      ['secondKey', 'secondValue'],
      ['thirdKey', 'thirdValue'],
      ['fourthKey', 'fourthValue']
    ].forEach(newEntry => object.entries[newEntry[0]] = newEntry[1]);
  });
  it(`returns an object containing all key/value pairs in this.entries ... `, () => {
    const expected = {
      firstKey: 'firstValue',
      secondKey: 'secondValue',
      thirdKey: 'thirdValue',
      fourthKey: 'fourthValue',
    }
    assert.deepStrictEqual(object.readAll(), expected);
  });
  it(`... is not hard-coded ...`, () => {
    const expected = {
      silk: 'road',
      dark: 'web',
    };
    object.entries = expected;
    assert.deepStrictEqual(object.readAll(), expected);
  });
  it(`... and returns a true copy`, () => {
    assert.ok(object.readAll() !== object.entries);
  });
});
