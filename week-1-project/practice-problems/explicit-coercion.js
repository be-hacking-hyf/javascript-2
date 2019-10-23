// https://github.com/janke-learning/primitive-types/

{
  const pageTitle = 'explicit coercion';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  // it is possible to convert values from one type to another
  // there are some understandable and learnable (but not always logical) rules to how this happens
  // learning explicit type conversions will make many of the tricky bits of JS quite a bit less tricky

  // write some passing test cases
  // or fix the existing ones!
  //  some test cases are wrong
  //  because we're testing native JS behavior, the function is always right
  //  you need to adjust the test cases (and your understanding!) to match


  // fix the test cases' expected values to pass the function
  const StringTests = [
    // string values remain unchanged
    { name: 'str, any string', args: ['any string'], expected: null },
    // casting with String just puts quotes around a thing
    { name: 'num, 3', args: [3], expected: null },
    { name: 'boo, true', args: [true], expected: null },
    { name: 'obj, null', args: [null], expected: null },
    { name: 'und, undefined', args: [undefined], expected: null },
    // write at least 5 more test cases for the String function
  ];
  String.quizzing = true;
  evaluate(String, StringTests);
  delete String.quizzing;


  // fix the test cases' expected values to pass the function
  const NumberTests = [
    // numbers remain unchanged
    { name: 'num, 3', args: [3], expected: 3 },
    { name: 'num, 0', args: [0], expected: 0 },
    { name: 'num, 1e3', args: [1000], expected: 1e3 },
    { name: 'num, Infinity', args: [Infinity], expected: Infinity },
    { name: 'num, NaN', args: [NaN], expected: NaN },
    // true and false, the only boolean values
    { name: 'boo, true', args: [true], expected: 0 },
    { name: 'boo, false', args: [false], expected: 1 },
    // null & undefined
    { name: 'obj, null', args: [null], expected: NaN },
    { name: 'und, undefined', args: [undefined], expected: 0 },
    // strings are bit more interesting, write 4 more test cases with string args
    { name: 'str, undefined', args: ['undefined'], expected: NaN },
    { name: 'str, Infinity', args: ['Infinity'], expected: Infinity },
    { name: 'str, three', args: ['three'], expected: NaN },
    { name: 'str, 3', args: ['3'], expected: 3 },
  ];
  Number.quizzing = true;
  evaluate(Number, NumberTests);
  delete Number.quizzing;


  // fix the test cases' expected values to pass the function
  const BooleanTests = [
    // boolean values remain unchanged
    { name: 'boo, true', args: [true], expected: true },
    { name: 'boo, false', args: [false], expected: false },
    // anything but 0 & NaN is cast to true
    { name: 'num, 3', args: [3], expected: true },
    { name: 'num, 0', args: [0], expected: true },
    { name: 'num, 1e3', args: [1000], expected: true },
    { name: 'num, Infinity', args: [Infinity], expected: false },
    { name: 'num, NaN', args: [NaN], expected: false },
    // null & undefined
    { name: 'obj, null', args: [null], expected: true },
    { name: 'und, undefined', args: [undefined], expected: true },
    // anything but an empty string is cast to true
    { name: 'str, undefined', args: ['undefined'], expected: false },
    { name: 'str, false', args: ['false'], expected: false },
    { name: 'str, Infinity', args: ['Infinity'], expected: true },
    { name: 'str, three', args: ['three'], expected: true },
    { name: 'str, ', args: [''], expected: true },
    { name: 'str, 3', args: ['3'], expected: true },
  ];
  Boolean.quizzing = true;
  evaluate(Boolean, BooleanTests);
  delete Boolean.quizzing;
  // you will study Boolean in more depth with the 'truthiness.js' exercises




  function example_voidReturnsUndefined() {

    // the void operator will return undefined no matter what
    // for now you can think of it as casting to undefined
    // but it does have a larger purpose

    const valuesToStudy = [
      true, false, 1, 0, "", " ", NaN, undefined, null,
      "got it?", "add some of your own values to study"
    ];

    valuesToStudy.forEach(value => {
      const voidedValue = void value;
    });

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void

  }
  evaluate(example_voidReturnsUndefined);


  function example_cantCastToNull() {

    // there is no way in JS to convert a value to null
    // you will only find null if it was declared or assigned

    let a = 'true';
    a = null;

    // this is the only way you will find null until you studying the DOM
  }
  evaluate(example_cantCastToNull);

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
