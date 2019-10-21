const { testComponent, testElement } = (() => {

  function testComponent(component, target, name) {
    if (typeof component !== 'function') throw new TypeError('component must be a function');

    try {
      if (!(target instanceof Array) && arguments.length > 1) {
        throw (new TypeError("test cases must be an array"));
      }

      name = name
        ? name
        : component.name;

      describe(name, () => {
        target.forEach(testCase => {
          testElement(
            component(...testCase.args),
            testCase.expected,
            testCase.name
            // testCase.expected.nodeName && testCase.expected.id
            //   // ? `${testCase.name}: ${testCase.expected.nodeName}, id === ${testCase.expected.id}`
            //   ? `${testCase.name}: ${testCase.expected.nodeName}`
            //   : testCase.expected.nodeName
            //     ? `${testCase.name}: ${testCase.expected.nodeName}`
            //     : testCase.name
          );
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  const testElement = (toTest, target, name) => {

    if (!(toTest instanceof Element)) { throw TypeError('first argument must be an Element') }

    name = typeof name !== 'string'
      ? `comparing to ${target.nodeName}: id === ${target.id}`
      : name;

    describe(name, () => {
      if (toTest === undefined) {
        it('no such child', () => { throw new Error(name + ' is undefined') });
        return;
      };
      testElement.attributesToCompare.forEach(attribute => {
        if (!target[attribute]) return;
        if (attribute === 'children') {
          describe(`testing children`, () => {
            for (let i = 0; i < target.childElementCount; i++) {
              const nextChild = target.children[i];
              testElement(toTest.children[i], nextChild, `child ${i}: ${nextChild.nodeName}`);
            };
          });
        } else {
          const attributeToTest = toTest[attribute] === undefined
            ? ''
            : toTest[attribute];
          it(attribute, () => {
            assert.strictEqual(target[attribute], attributeToTest);
          });
        };
      });
    });
  }

  testElement.attributesToCompare = ['id', 'className', 'nodeName', 'childElementCount', 'children'];

  Object.defineProperty(testComponent, 'attributesToCompare', {
    get: function () {
      return testElement.attributesToCompare;
    },
    set: function (arr) {
      testElement.attributesToCompare = arr;
    }
  });

  return { testComponent, testElement };
})();
