// https://github.com/janke-learning/truthiness/blob/master/operators-of-truthiness.md


{
  const pageTitle = 'truthiness operators';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  // careful!  this isn't quite like the 'or' you use in conversation
  const orTests = [
    { name: '1, 1', args: [1, 1], expected: 1 },
    { name: '0, 1', args: [0, 1], expected: 1 },
    { name: '1, 0', args: [1, 0], expected: 1 },
    { name: '0, 0', args: [0, 0], expected: 0 },
    { name: 'NaN, "true"', args: [NaN, "true"], expected: "true" },
    { name: '"true", NaN', args: ["true", NaN], expected: "true" },
    { name: 'NaN, NaN', args: [NaN, NaN], expected: NaN },
    // complete these test cases
    { name: `Nan, 0`, args: [NaN, 0], expected: 0 },
    { name: `Nan, 1`, args: [NaN, 1], expected: 1 },
    { name:'NaN, 0', args: [NaN, 0], expected: 0 },
    { name: `0, NaN`, args: [0, NaN], expected: NaN },
    { name: `null, 0`, args: [null, 0], expected: 0 },
    { name: `1, NaN`, args: [1, NaN], expected: 1 },
    { name: `2, b`, args: [2, `b`], expected: 2 },
    { name: `b, 2`, args: [`b`, 2], expected: `b` },
  ];
  function or(a, b) {
    return a || b;
  }
  or.quizzing = true;
  evaluate(or, orTests);


  // careful!  this isn't quite like the 'and' you use in conversation
  const andTests = [
    { name: '1, 1', args: [1, 1], expected: 1 },
    { name: '0, 1', args: [0, 1], expected: 0 },
    { name: '1, 0', args: [1, 0], expected: 0 },
    { name: '0, 0', args: [0, 0], expected: 0 },
    { name: 'NaN, "true"', args: [NaN, "true"], expected: NaN },
    { name: '"true", NaN', args: ["true", NaN], expected: NaN },
    { name: 'NaN, NaN', args: [NaN, NaN], expected: NaN },
    // complete these test cases
    { name: `0, NaN`, args: [0, NaN], expected: 0 },
    { name: `NaN, 0`, args: [NaN, 0], expected: NaN },
    { name: `[], {}`, args: [[], {}], expected: {} },
    { name: `{}, []`, args: [{}, []], expected: [] },
    { name: `false, true`, args: [`false`, `true`], expected: `true` },
    { name: `true, false`, args: [`true`, `false`], expected: `false` },
    { name: `2, NaN`, args: [2, NaN], expected: NaN },
    { name: `null, NaN`, args: [null, NaN], expected: null },
  ];
  function and(a, b) {
    return a && b;
  }
  and.quizzing = true;
  evaluate(and, andTests);



  const notTests = [
    { name: '1', args: [1], expected: false },
    { name: '0', args: [0], expected: true },
    { name: 'NaN', args: [NaN], expected: true },
    { name: '"hi!"', args: ['hi!'], expected: false },
    // complete these test cases
    { name: `0.0`, args: [0.0], expected: true },
  { name: `{}`, args: [{}], expected: false },
  { name: `10`, args: [10], expected: false },
  { name: `false`, args: [`false`], expected: false },
  { name: `NaN`, args: [`NaN`], expected: false },
  { name: `{ }`, args: [{ }], expected: false },
  { name: `true`, args: [`true`], expected: false },
  { name: `true`, args: [true], expected: false },
];
  function not(a) {
    return !a;
  }
  not.quizzing = true;
  evaluate(not, notTests);


  const ternaryTests = [
    { name: 'true', args: [true, 'true', 'false'], expected: 'true' },
    { name: 'false', args: [false, 'true', 'false'], expected: 'false' },
    { name: 'NaN', args: [NaN, 'first', 'second'], expected: 'second' },
    { name: '"hi!"', args: ['hi!', '?', ':'], expected: '?' },
    { name: '0', args: [0, 'truthy', 'falsey'], expected: 'falsey' },
    // complete these test cases
    { name: `1<2`, args: [1<2, 1, 2], expected: 1 },
  { name: `{}`, args: [{}, `true`, `false`], expected: `true` },
  { name: `Boolean("hi")`, args: [Boolean("hi"), "hi", "bye"], expected: "hi" },
  { name: `1`, args: [1, `1`, `!1`], expected: `1` },
  { name: `0.0`, args: [0.0, 1, 0.0], expected: 0.0 },
  { name: `null`, args: [null, `something`, null], expected: null },
  { name: `5!=0`, args: [5!=0, 5, 0], expected: 5},
  { name: `!{}`, args: [!{}, {}, !{}], expected: !{} },
];
  function ternary(a, b, c) {
    return a ? b : c;
  }
  ternary.quizzing = true;
  evaluate(ternary, ternaryTests);

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
