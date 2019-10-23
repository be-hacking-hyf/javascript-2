// https://www.youtube.com/watch?v=Z_ozyN5MyWY&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=5
// https://www.youtube.com/watch?v=W1NTK09o-vM&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=4

{
  const pageTitle = 'arrays vs. objects';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

try {

  function swapValues1() {
    const obj = { prop: "array" };
    const arr = ["object"];
    let _ = null;

    // swap the values stored in each structure


    console.assert(obj.prop === "object", "obj.prop should be 'object");
    console.assert(arr[0] === "array", "arr[0] should be 'array");
  }
  evaluate(swapValues1);

  function swapValues2() {
    const obj = { prop: "array" };
    const arr = ["object"];
    let _ = null;

    // swap the values stored in each structure using brackets and these variables
    const objKey = 'prop';
    const arrIndex = 0;


    // asserts
    console.assert(obj[obj_key] === "object", "obj assert");
    console.assert(arr[arr_index] === "array", "arr assert");
  }
  evaluate(swapValues2);


  function example_doesOrderMatter() {

    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { c: 3, b: 2, a: 1 };
    const obj3 = { a: 1, b: 2, c: 3 };
    // do you remember why '===' won't work here?
    console.assert(evaluate.compareValues(obj1, obj2), 'obj: same keys/values, different order');
    console.assert(evaluate.compareValues(obj1, obj3), 'obj: same keys/values, same order');

    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];
    const arr3 = [1, 2, 3];
    // do you remember why '===' won't work here?
    console.assert(evaluate.compareValues(arr1, arr2), 'arr: same values, different order');
    console.assert(evaluate.compareValues(arr1, arr3), 'arr: same values, same order');


  }
  evaluate(example_doesOrderMatter);


  function example_relativeVsAbsolute() {

    // array indices are relative
    const arr = ["a", "b"];
    const index = 0;

    const firstReadFromArray = arr[index];
    arr.shift(); // removes the first item
    const secondReadFromArray = arr[index];

    console.assert(firstReadFromArray !== secondReadFromArray, 'first and second array reads should not be the same');

    // object keys are absolute
    const obj = { x: "a", y: "b" };
    const key = "y";

    const firstReadFromObject = obj[key];
    delete obj.x;
    const secondReadFromObject = obj[key];

    console.assert(firstReadFromObject === secondReadFromObject, 'first and second object reads should be the same');
  }
  evaluate(example_relativeVsAbsolute);


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
