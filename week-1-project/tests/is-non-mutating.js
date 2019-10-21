describe(`all "get" methods are non-mutating`, () => {
  before(() => {
    object.numberyStrings = ['-1', '0', '1'];
    object.NaNyStrings = ['h', 'i', '!'];
  });

  describe(`.allStrings()`, () => {
    before(() => { object.allStrings() });
    it('does not modify .numberyStrings', () => {
      assert.deepStrictEqual(object.numberyStrings, ['-1', '0', '1']);
    });
    it('does not modify .NaNyStrings', () => {
      assert.deepStrictEqual(object.NaNyStrings, ['h', 'i', '!']);
    });
  });
  describe(`.evenStrings()`, () => {
    before(() => { object.evenStrings() });
    it('does not modify .numberyStrings', () => {
      assert.deepStrictEqual(object.numberyStrings, ['-1', '0', '1']);
    });
    it('does not modify .NaNyStrings', () => {
      assert.deepStrictEqual(object.NaNyStrings, ['h', 'i', '!']);
    });
  });
  describe(`.oddStrings()`, () => {
    before(() => { object.oddStrings() });
    it('does not modify .numberyStrings', () => {
      assert.deepStrictEqual(object.numberyStrings, ['-1', '0', '1']);
    });
    it('does not modify .NaNyStrings', () => {
      assert.deepStrictEqual(object.NaNyStrings, ['h', 'i', '!']);
    });
  });
  describe(`.negativeStrings()`, () => {
    before(() => { object.negativeStrings() });
    it('does not modify .numberyStrings', () => {
      assert.deepStrictEqual(object.numberyStrings, ['-1', '0', '1']);
    });
    it('does not modify .NaNyStrings', () => {
      assert.deepStrictEqual(object.NaNyStrings, ['h', 'i', '!']);
    });
  });
  describe(`.positiveStrings()`, () => {
    before(() => { object.positiveStrings() });
    it('does not modify .numberyStrings', () => {
      assert.deepStrictEqual(object.numberyStrings, ['-1', '0', '1']);
    });
    it('does not modify .NaNyStrings', () => {
      assert.deepStrictEqual(object.NaNyStrings, ['h', 'i', '!']);
    });
  });
  describe(`.zeroStrings()`, () => {
    before(() => { object.zeroStrings() });
    it('does not modify .numberyStrings', () => {
      assert.deepStrictEqual(object.numberyStrings, ['-1', '0', '1']);
    });
    it('does not modify .NaNyStrings', () => {
      assert.deepStrictEqual(object.NaNyStrings, ['h', 'i', '!']);
    });
  });
  describe(`.numberyAsNumbers`, () => {
    before(() => { object.numberyAsNumbers() });
    it('does not modify .numberyStrings', () => {
      assert.deepStrictEqual(object.numberyStrings, ['-1', '0', '1']);
    });
    it('does not modify .NaNyStrings', () => {
      assert.deepStrictEqual(object.NaNyStrings, ['h', 'i', '!']);
    });
  });
  describe(`.sumOfNumbery`, () => {
    before(() => { object.sumOfNumbery() });
    it('does not modify .numberyStrings', () => {
      assert.deepStrictEqual(object.numberyStrings, ['-1', '0', '1']);
    });
    it('does not modify .NaNyStrings', () => {
      assert.deepStrictEqual(object.NaNyStrings, ['h', 'i', '!']);
    });
  });
});
