// https://www.youtube.com/watch?v=W1NTK09o-vM&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=4    
// https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600

{
  const pageTitle = 'arrays';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  function example_arraysAreStoredByReference() {

    // primitives are stored "by value"
    // or directly in the slot of a variable
    const number5 = 5;
    // assigning number5 to a new variable makes a copy of 5
    let new5 = number5;
    // modifying the new variable does not change the old one
    new5 = new5 + 1;
    // because primitives are copied to new variables

    // arrays are stored by reference
    // meaning there is an array in memory that variables point to
    const array1 = [];
    // assigning array1 to a new variable doesn't create a copy of the array
    let array2 = array1;
    // modifying either variable will effect the other
    array2.push(6);
    console.log(array1);

    array1.push('hi!');
    console.log(array2);


    // to create a new array in memory, you must write new square brackets
    const array3 = [];
    // reassigning object2 will make it point to ...
    array2 = array3;
    // but not effect the array1 variable
    console.log(array1);

  }
  evaluate(example_arraysAreStoredByReference);

  function example_comparingArrays() {
    let a = [0, 1];
    let b = [0, 1];
    console.assert(a !== b, 'a should not strictly equal b');

    b = a;
    console.assert(a === b, 'a should strictly equal b');

    // it's not about the contents of the array
    // it's about the array the variable points to
  }
  evaluate(example_comparingArrays);


  function example_swappingArrayReferences() {
    let a = ["b"], b = ["a"], temp = null;

    // swap the arrays to which each variable points
    temp = a;
    a = b;
    b = temp;

    console.assert(a[0] === 'a', 'a[0] should store "a"');
    console.assert(b[0] === 'b', 'b[0] should store "b"');
  }
  evaluate(example_swappingArrayReferences);


  function example_swappingArrayValues() {
    let a = ["b"], b = ["a"], temp = null;

    // swap the arrays to which each variable points
    temp = a[0];
    a[0] = b[0];
    b[0] = temp;

    console.assert(a[0] === 'a', 'a[0] should store "a"');
    console.assert(b[0] === 'b', 'b[0] should store "b"');
  }
  evaluate(example_swappingArrayValues);


  function example_garbageCollectingArrays() {
    // if no variables reference an array, it disappears

    let reference1 = ['hi!'];
    let reference2 = reference1;

    reference1 = null;
    reference2 = null;

    // never to come back again
    // this is the only way to truly delete an array
  }
  evaluate(example_garbageCollectingArrays);


  function passTheAssertions1() {
    ; // declare and assign a1
    ; // declare and assign a2
    console.assert(a1 === a2, 'a1 should strictly equal a2');

    ; // declare and assign b1
    ; // declare and assign b2
    console.assert(b1 !== b2, 'b1 should not strictly equal b2');

    // ---

    ; // write one line to pass the assertions
    console.assert(a1[0] === a2[0], 'a1[0] should strictly equal a2[0]');
    console.assert(a1[0] === 'hi!', 'a1.x should strictly equal "hi!"');

    ; // write two lines to pass the assertions
    ;
    console.assert(b1[0] === b2[0], 'b1[0] should strictly equal b2[0]');
    console.assert(b1[0] === 'bye!', 'b1.x should strictly equal "bye!"');
  }
  evaluate(passTheAssertions1);


  function passTheAssertions2() {
    const value1 = 5;
    let reference1 = [];

    ; // write this line
    console.assert(value2 === value1, "value1 should strictly equal value2");

    ; // write this line
    console.assert(reference2 === reference1, "reference1 should strictly equal reference2");

    value2 = value2 + 1; // write this line
    console.assert(value1 !== null, "value1 should strictly equal ___");

    ; // write this line
    console.assert(reference1[0] === reference2[0], "references[0] should be strictly equal");
    console.assert(reference1[0] === 'hi!', "reference1[0] should be strictly equal to 'hi!'");

    ; // write this line
    console.assert(reference1 === reference2, "references should be strictly equal");

    // remove the array from memory
    ; // write this line
    ; // write this line
  }
  evaluate(passTheAssertions2);


  function passTheAssertions3() {
    ; // write this line
    ; // write this line
    console.assert(arr1 !== arr2, 'the variables should not be strictly equal');
    console.assert(arr1[1] === arr2[1], 'their first entries should be the same');
    console.assert(arr1[1] === 'B', 'arr1[1]] should be "B"');

    const index = 0;
    console.assert(arr1[index] === arr2[index], 'arr1[index] should strictly equal arr2[index]');
    console.assert(arr1[index] === 'A', 'arr1[index] should be "A"');

    ; // write this line
    ; // write this line
    console.assert(arr1[arr2[2]] === 'B', 'arr2[2] should be "B"s index in arr1');
    console.assert(arr1[arr2[2]] === arr2[arr1[2]], 'some tricky nested thing should be true');

    ; // write this line
    console.assert(arr1 !== arr2, 'arr1 should strictly equal arr2');
    console.assert(arr3 !== arr1, 'arr3 should not strictly equal arr`');
    console.assert(arr3 === arr2, 'arr3 should strictly equal arr2');
    console.assert(arr3[index] === arr1[0], 'arr3[index] should strictly equal arr1[0]');

    ; // write this line
    console.assert(arr3[2] === arr2[index], 'arr3[2] should strictly equal arr2[index]');
  }
  evaluate(passTheAssertions3);



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
