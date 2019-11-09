// https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600
// https://www.youtube.com/watch?v=Z_ozyN5MyWY&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=5
// http://javascript.info/object

{
  const pageTitle = 'objects';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  function example_objectsAreStoredByReference() {

    // primitives are stored "by value"
    // or directly in the slot of a variable
    const number5 = 5;
    // assigning number5 to a new variable makes a copy of 5
    let new5 = number5;
    // modifying the new variable does not change the old one
    new5 = new5 + 1;
    // because primitives are copied to new variables

    // objects are stored by reference
    // meaning there is an object in memory that variables point to
    const object1 = {};
    // assigning object1 to a new variable doesn't create a copy of the object
    let object2 = object1;
    // modifying either variable will effect the other
    object2.x = 6;
    console.log(object1);

    object1.y = 'hi!';
    console.log(object2);

    // to create a new object in memory, you must write new curly braces
    const object3 = {};
    // reassigning object2 will make it point to ...
    object2 = object3;
    // but not effect the object1 variable
    console.log(object1);

  }
  evaluate(example_objectsAreStoredByReference);

  function example_comparingObjects() {
    let a = { x: 0, y: 1 };
    let b = { x: 0, y: 1 };
    console.assert(a !== b, 'a should not strictly equal b');

    b = a;
    console.assert(a === b, 'a should strictly equal b');

    // it's not about the contents of the object
    // it's about the object the variable points to
  }
  evaluate(example_comparingObjects);

  function example_swappingObjectReferences() {
    let a = { x: 'b' }, b = { x: 'a' }, temp = null;

    // swap the objects to which each variable points
    temp = a;
    a = b;
    b = temp;

    console.assert(a.x === 'a', 'a.x should store "a"');
    console.assert(b.x === 'b', 'b.x should store "b"');
  }
  evaluate(example_swappingObjectReferences);

  function example_swappingValuesWithDot() {
    let a = { x: 'b' }, b = { x: 'a' }, temp = null;

    // swap the objects to which each variable points
    temp = a.x;
    a.x = b.x;
    b.x = temp;

    console.assert(a.x === 'a', 'a.x should store "a"');
    console.assert(b.x === 'b', 'b.x should store "b"');
  }
  evaluate(example_swappingValuesWithDot);

  function example_swappingValuesWithBrackets() {
    let a = { x: 'b' }, b = { x: 'a' }, temp = null;

    // swap the objects to which each variable points
    const key = 'x';
    temp = a[key];
    a[key] = b[key];
    b[key] = temp;

    console.assert(a[key] === 'a', "a[key] should store 'a'");
    console.assert(b[key] === 'b', "b[key] should store 'b'");
  }
  evaluate(example_swappingValuesWithBrackets);

  function example_garbageCollectingObjects() {
    // if no variables reference an object, it disappears

    let reference1 = { x: 'hi!' };
    let reference2 = reference1;

    reference1 = null;
    reference2 = null;

    // never to come back again
    // this is the only way to truly delete an object
  }
  evaluate(example_garbageCollectingObjects);




  function passTheAssertions1() {
    const a1 = {}; // declare and assign a1
    const a2 = a1; // declare and assign a2
    console.assert(a1 === a2, 'a1 should strictly equal a2');

    const b1 = {}; // declare and assign b1
    const b2 = {}; // declare and assign b2
    console.assert(b1 !== b2, 'b1 should not strictly equal b2');

    // ---

    a1.x = 'hi!'; // write one line to pass the assertions
    console.assert(a1.x === a2.x, 'a1.x should strictly equal a2.x');
    console.assert(a1.x === 'hi!', 'a1.x should strictly equal "hi!"');

    b1.x = 'bye!'; // write two lines to pass the assertions
    b2.x = 'bye!';
    console.assert(b1.x === b2.x, 'b1.x should strictly equal b2.x');
    console.assert(b1.x === 'bye!', 'b1.x should strictly equal "bye!"');

    // --
    const index = 'y';

    ; // write one line to pass the assertions
    console.assert(a1[index] === a2[index], 'a1[index] should strictly equal a2[index]');
    console.assert(a1[index] === 'roof!', 'a1[index] should strictly equal "roof!"');

    ; // write two lines to pass the assertions
    ;
    console.assert(b1[index] === b2[index], 'b1[index] should strictly equal b2[index]');
    console.assert(b1[index] === 'floor!', 'b1[index] should strictly equal "floor!"');


  }
  evaluate(passTheAssertions1);


  function passTheAssertions2() {
    const value1 = 5;
    let reference1 = {};

    ; // write this line
    console.assert(value2 === value1, "value1 should strictly equal value2");

    ; // write this line
    console.assert(reference2 === reference1, "reference1 should strictly equal reference2");

    value2 = value2 + 1; // write this line
    console.assert(value1 !== null, "value1 should strictly equal ___");

    ; // write this line
    console.assert(reference1.x === reference2.x, "references.x should be strictly equal");
    console.assert(reference1.x === 'hi!', "references.x should strictly equal 'hi!'");

    ; // write this line
    console.assert(reference1 === reference2, "references should be strictly equal");

    // remove the object from memory
    ; // write this line
    ; // write this line
  }
  evaluate(passTheAssertions2);



  function passTheAssertions3() {
    ; // write this line
    ; // write this line
    console.assert(obj1 !== obj2, 'the variables should not be strictly equal');
    console.assert(obj1.y === obj2.y, 'their first entries should be the same');
    console.assert(obj1.y === 'B', 'obj1.y should be "B"');

    const index = 'x';
    console.assert(obj1[index] === obj2[index], 'obj1[index] should strictly equal obj2[index]');
    console.assert(obj1[index] === 'A', 'obj1[index] should be "A"');

    ; // write this line
    ; // write this line
    console.assert(obj1[obj2.z] === 'B', 'obj2.z should be "B"s index in obj1');
    console.assert(obj1[obj2.z] === obj2[obj1.z], 'some tricky nested thing should be true');

    ; // write this line
    console.assert(obj1 !== obj2, 'obj1 should strictly equal obj2');
    console.assert(obj3 !== obj1, 'obj3 should not strictly equal obj`');
    console.assert(obj3 === obj2, 'obj3 should strictly equal obj2');
    console.assert(obj3[index] === obj1.x, 'obj3[index] should strictly equal obj1.x');

    ; // write this line
    console.assert(obj3.z === obj2[index], 'obj3.z should strictly equal obj2[index]');
  }
  evaluate(passTheAssertions3);


  function footnote_objectDotKeysAndValues() {
    // there are two very helpful native JS functions for working with objects
    // some day you'll be glad you remembered these exist!

    const obj = { x: 3, y: 2, z: 1 };
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);

  }
  evaluate(footnote_objectDotKeysAndValues);

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
