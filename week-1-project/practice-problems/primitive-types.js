// https://github.com/janke-learning/primitive-types

{
  const pageTitle = 'primitive types';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  function example_primitiveTypes() {

    // there 5 types of primitive values you will study in JavaScript 1

    // these two types have only one possible value
    const nullPrimitive = null;
    const undefinedPrimitive = undefined;

    // there are two possible boolean values
    const booleanPrimitive1 = true;
    const booleanPrimitive2 = false;

    // anything between quotes is a string
    const stringPrimitives = 'anything between quotes';

    // numbers are a bit stranger than the rest
    // besides the "normal" numbers:
    const normalNumber0 = 0;
    const normalNumber1 = 1;
    const normalNumberNegative1 = -1;
    const normalNumber1Point5 = 1.5;
    // there are some strange numbers:
    const strangeNumberNaN = NaN;
    const strangeNumberInfinity = Infinity;

  }
  evaluate(example_primitiveTypes);

  function example_allValuesHaveAType() {

    const valuesToStudy = ["hi!", "", '', ``, Infinity, NaN,
      0, 1, 1e3, true, false, null, undefined,
      1000, -20, 'got it?'
    ];

    valuesToStudy.forEach(value => {
      const type = typeof value;
    });

    // null's type is, confusingly, "object".
    // just go with it, JS is sometimes strange
    // and all there is to do is memorize the strange parts

  }
  evaluate(example_allValuesHaveAType);

  // all values in JavaScript have a type
  // the type of a value is very important to understanding how JS works
  const typeofTests = [
    // boolean values
    { name: 'boo, true', args: [true], expected: 'boolean' },
    { name: 'boo, false', args: [false], expected: 'boolean' },
    // null's type is 'null'.  just remember, don't try yet to understand
    { name: 'obj, true', args: [null], expected: 'object' },
    // undefined. like with null, there is only one value with this type
    { name: 'und, undefined', args: [undefined], expected: 'undefined' },
    // strings are anything with quotes around it
    { name: 'str, ', args: [''], expected: 'string' },
    { name: 'str, anything with quotes!', args: ['anything with quotes!'], expected: 'string' },
    // numbers are a bit more strange and varied
    { name: 'num, 0.0', args: [0.0], expected: 'number' },
    { name: 'num, NaN', args: [NaN], expected: 'number' },
    { name: 'num, Infinity', args: [Infinity], expected: 'number' },
    { name: 'num, 4', args: [4], expected: 'number' },
    // write 6 more passing test cases with expected value 'number'
    { name: '', args: [NaN], expected: 'number' },
    { name: '', args: [Infinity], expected: 'number' },
    { name: '', args: [-Infinity], expected: 'number' },
    { name: '', args: [1e5], expected: 'number' },
    { name: '', args: [7], expected: 'number' },
    { name: '', args: [0.0], expected: 'number' },
  ]
  function allValuesHaveAType(value) {
    return typeof value;
  }
  allValuesHaveAType.quizzing = true;
  evaluate(allValuesHaveAType, typeofTests);


  // fix the test cases' expected values to pass the function
  const typeofReturnsAStringTests = [
    { name: 'boo, true', args: [true], expected: 'string' },
    { name: 'boo, false', args: [false], expected: 'string' },
    { name: 'obj, true', args: [null], expected: 'string' },
    { name: 'und, undefined', args: [undefined], expected: 'string' },
    { name: 'str, anything with quotes!', args: ['anything with quotes!'], expected: 'string' },
    { name: 'num, 4', args: [4], expected: 'string' },
  ];
  function typeofReturnsAString(value) {
    const typeofValue = typeof value;
    return typeof typeofValue;
  }
  typeofReturnsAString.quizzing = true;
  evaluate(typeofReturnsAString, typeofReturnsAStringTests);



  function example_aBitAboutNaN() {

    // NaN is the only value that does not strictly equal itself
    // this is a bit strange. just remember it
    const valuesToStudy = [
      true, false, 1, 0, "", " ", NaN, undefined, null,
      "got it?", "add some of your own values to study"
    ];

    valuesToStudy.forEach(value => {
      const equalsItself = value === value;
      const doesNotEqualItself = value !== value;
    });

  }
  evaluate(example_aBitAboutNaN);

  // fix the expected values to pass the tests
  const strictEqualityTests = [
    { name: 'NaN', args: [NaN, NaN], expected: false },
    { name: 'first', args: [true, 'true'], expected: false },
    { name: 'second', args: [1, '1'], expected: false},
    { name: 'third', args: ['1', '1'], expected: true },
    { name: 'fourth', args: [1000, 1e3], expected: true },
    { name: 'fifth', args: [+0, -0], expected: true },
    { name: 'sixth', args: [1, 1.0], expected: true },
    { name: 'seventh', args: ['', ""], expected: true },
    { name: 'eighth', args: ["", ``], expected: true },
    { name: 'ninth', args: ['  ', ' '], expected: false },
  ];
  function strictEquality(a, b) {
    // if type OR value are not the same, returns false
    // if type AND value are the same, returns true
    return a === b;
  }
  strictEquality.quizzing = true;
  evaluate(strictEquality, strictEqualityTests);



  const strictInequalityTests = [
    { name: 'NaN', args: [NaN, NaN], expected: true },
    { name: 'first', args: [true, 'true'], expected: true},
    { name: 'second', args: [1, '1'], expected: true },
    { name: 'third', args: ['1', '1'], expected: false },
    { name: 'fourth', args: [1000, 1e3], expected: false },
    { name: 'fifth', args: [+0, -0], expected: false },
    { name: 'sixth', args: [1, 1.0], expected: false },
    { name: 'seventh', args: ['', ""], expected: false },
    { name: 'eighth', args: ["", ``], expected: false },
    { name: 'ninth', args: ['  ', ' '], expected: true },
  ];
  function strictInequality(a, b) {
    // if type OR value are not the same, returns true
    // if type AND value are the same, returns false
    return a !== b;
  }
  strictInequality.quizzing = true;
  evaluate(strictInequality, strictInequalityTests);



  // for more: https://github.com/janke-learning/primitive-types/blob/master/null-vs-undefined.md
  function example_nullVsUndefined() {

    // null and undefined are two different types
    const typeofNull = typeof null;
    const typeofUndefined = typeof undefined;

    // undefined can happen by accident in a few ways (here are a few)
    const assignedToUndefined = undefined;
    let unAssignedVariable;
    const object = {};
    const nonExistentProperty = object.prop;
    const array = [];
    const nonExistentEntry = array[0];


    // null will only happen on purpose (until you study the DOM)
    const assignedNull = null;

    // so, using null or undefined is a matter of convention
    // using null means that you intentionally want something empty
    // undefined could be on purpose or by accident

  }
  evaluate(example_nullVsUndefined);



  /* P.S.
    this set of exercises covers only the basic primitive types

    Symbols are also a primitive type, but are a bit more complicated
    and you won't need them for now: https://javascript.info/symbol

    There are also more object types than just null (Object, Array, Date, ...)
      but these are more complicated and don't play so nice with type casting
      they are also stored by reference so are fundamentally different than the primitives

    comparing objects also works differently than comparing primitives
      this will be covered in the exercises on arrays & objects

    functions are also their own type: typeof function(){} - 'function'
      but functions are not primitives, so more on them later in the course

  */


} catch (err) {
  console.log(err);
  document.body.appendChild(
    evaluate.errorSearchComponent('.js file', err)
  );
}
{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
