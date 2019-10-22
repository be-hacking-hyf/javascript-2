{
  const pageTitle = 'array methods';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed('%c' + pageTitle, 'font-weight:bold');
}
try {


  const globalArray1 = [1, 2, 3];
  const globalArray2 = [2, 3, 4];
  const globalArray3 = ['3', null, 'hi!'];
  const globalArray4 = [true, false, '5'];

  const concatArraysTests = [
    { name: 'first', args: [globalArray1, globalArray2], expected: [2, 3, 4, 1, 2, 3] },
    { name: 'second', args: [globalArray1, globalArray3], expected: ['3', null, 'hi!', 1, 2, 3] },
    { name: 'third', args: [['hello'], globalArray4], expected: ['hello', true, false, '5'] },
    { name: 'fourth', args: [['hello'], ['world']], expected: ['hello', 'world'] },
  ];
  function concatArrays(arr1, arr2) {
    // write me!
  }
  concatArrays.display = true;
  evaluate(concatArrays, concatArraysTests);

  const isNaNyStringTests = [
    { name: 'first', args: ['3'], expected: false },
    { name: 'second', args: [''], expected: false },
    { name: 'third', args: ['.'], expected: true },
    { name: 'fourth', args: ['*'], expected: true },
    { name: 'fifth', args: ['1e3'], expected: false },
    { name: 'sixth', args: ['1e3'], expected: false },
    { name: 'seventh', args: ['Infinity'], expected: false },
    { name: 'eighth', args: ['infinity'], expected: true },
    { name: 'ninth', args: ['NaN'], expected: true },
    { name: 'tenth', args: [NaN], expected: null },
    { name: 'eleventh', args: [true], expected: null },
    { name: 'twelfth', args: [undefined], expected: null },
    { name: 'thirteenth', args: [null], expected: null },
  ];
  function isNaNyString(arg) {
    // write me!
    // can you write this in one line?
  }
  isNaNyString.quizzing = true;
  isNaNyString.display = true;
  evaluate(isNaNyString, isNaNyStringTests);


  const globalArray5 = ['.', '1', '2', ':'];
  const globalArray6 = ['1', 'two', 'three', '10'];
  const globalArray7 = ['one', '2', '', 'NaN'];
  const globalArray8 = ['.', 1, 2, NaN];

  const oddsArray = ['1', '3', '5'];
  const evensArray = ['2', '4', '6'];

  const returnAsNumbersTests = [
    { name: 'first', args: [globalArray5], expected: [1, 2] },
    { name: 'second', args: [globalArray6], expected: [1, 10] },
    { name: 'third', args: [globalArray7], expected: [2, 0] },
    { name: 'fourth', args: [globalArray8], expected: null },
    { name: 'fifth', args: [[1, 2, 3]], expected: null },
    { name: 'sixth', args: [oddsArray], expected: [1, 3, 5] },
    { name: 'seventh', args: [evensArray], expected: [2, 4, 6] },
  ];
  function returnAsNumbers(arr) { // return an array of nonNanny strings cast to Number
    // write me!
    // early return condition: array contains no numbery strings
  };
  returnAsNumbers.display = true;
  evaluate(returnAsNumbers, returnAsNumbersTests);


  const numbersToSum1 = [-1, 0, 1];
  const numbersToSum2 = [-1, 0, -1];
  const numbersToSum3 = [1, 0, 1];

  const sumAllTests = [
    { name: 'first', args: [numbersToSum1], expected: 0 },
    { name: 'second', args: [numbersToSum1], expected: 0 },
    { name: 'third', args: [numbersToSum2], expected: -2 },
    { name: 'fourth', args: [numbersToSum2], expected: -2 },
    { name: 'fifth', args: [[1, 2, 3]], expected: 6 },
    { name: 'sixth', args: [numbersToSum3], expected: 2 },
    { name: 'seventh', args: [numbersToSum3], expected: 2 },
  ];
  function sumAll(arr) {
    // write me!
    // no early return, all the test cases are numbers!
    // this solution will be very helpful for the next exercise
  };
  sumAll.display = true;
  evaluate(sumAll, sumAllTests);



  const sumAllNumberysTests = [
    { name: 'first', args: [globalArray5], expected: 3 },
    { name: 'second', args: [globalArray6], expected: 11 },
    { name: 'third', args: [globalArray7], expected: 2 },
    { name: 'fourth', args: [globalArray8], expected: null },
    { name: 'fifth', args: [[1, 2, 3]], expected: null },
    { name: 'sixth', args: [['1', '2', '3']], expected: 6 },
    { name: 'seventh', args: [oddsArray], expected: 9 },
    { name: 'eighth', args: [evensArray], expected: 12 },
  ];
  function sumAllNumberys(arr) {
    // write me!
    // early return condition: array contains no numbery strings
  };
  sumAllNumberys.display = true;
  evaluate(sumAllNumberys, sumAllNumberysTests);


  const findAllEvensTests = [
    { name: 'first', args: [globalArray5], expected: ['2'] },
    { name: 'second', args: [globalArray6], expected: ['10'] },
    { name: 'third', args: [globalArray7], expected: ['2', ''] },
    { name: 'fourth', args: [globalArray8], expected: null },
    { name: 'fifth', args: [[1, 2, 3]], expected: null },
    { name: 'sixth', args: [oddsArray], expected: [] },
    { name: 'seventh', args: [evensArray], expected: ['2', '4', '6'] },
  ];
  function findAllEvens(arr) {
    // write me!
    // early return condition: array contains no numbery strings
  };
  findAllEvens.display = true;
  evaluate(findAllEvens, findAllEvensTests);

  const findAllOddsTests = [
    { name: 'first', args: [globalArray5], expected: ['1'] },
    { name: 'second', args: [globalArray6], expected: ['1'] },
    { name: 'third', args: [globalArray7], expected: [] },
    { name: 'fourth', args: [globalArray8], expected: null },
    { name: 'fifth', args: [[1, 2, 3]], expected: null },
    { name: 'sixth', args: [oddsArray], expected: ['1', '3', '5'] },
    { name: 'seventh', args: [evensArray], expected: [] },
  ];
  function findAllOdds(arr) {
    // write me!
    // early return condition: array contains no numbery strings
  };
  findAllOdds.display = true;
  evaluate(findAllOdds, findAllOddsTests);


} catch (err) {
  console.log(err);
  document.body.appendChild(
    evaluate.errorSearchComponent('.js file', err)
  );
}
{
  document.body.appendChild(document.createElement('hr'));
  console.groupEnd();
}
