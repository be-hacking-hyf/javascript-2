{
  const pageTitle = 'functions to objects';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {


  /* refactor functions to objects

    a good way to understand how "this" works is to refactor functions to methods

  */

  function example_methodsReadValuesFromObjects() {

    function sum(a, b) {
      return a + b
    };
    console.assert(7 === sum(3, 4), 'sum(3,4) should be 7');
    console.assert(9 === sum(5, 4), 'sum(5,4) should be 9');

    const obj = {
      a: 0,
      sum: function (b) {
        return this.a + b
      }
    }

    // methods can get "arguments" from their object
    obj.a = 3;
    console.assert(7 === obj.sum(4), 'obj.sum(4) should be 7');
    obj.a = 5;
    console.assert(9 === obj.sum(4), 'obj.sum(4) should be 9');
    // notice: same argument, different return values!
    // object methods are not always pure functions

  }
  evaluate(example_methodsReadValuesFromObjects);


  function example_methodsWriteValuesToObjects() {

    function sum(a, b) {
      return a + b
    };
    console.assert(7 === sum(3, 4), 'sum(3,4) should be 7');
    console.assert(9 === sum(5, 4), 'sum(5,4) should be 9');

    const obj = {
      result: 0,
      sum: function (a, b) {
        this.result = a + b
      }
    }

    // methods can "return" values to their objects
    obj.sum(3, 4);
    console.assert(7 === obj.result, 'obj.result should be 7');
    obj.sum(5, 4);
    console.assert(9 === obj.result, 'obj.result should be 9');

  }
  evaluate(example_methodsWriteValuesToObjects);


  function example_methodsCanDoBoth() {

    function sum(a, b) { return a + b };
    console.assert(7 === sum(3, 4), 'sum(3,4) should be 7');
    console.assert(9 === sum(5, 4), 'sum(5,4) should be 9');

    const obj = {
      a: 0,
      b: 0,
      result: 0,
      sum: function () {
        this.result = this.a + this.b
      }
    }

    // methods can "return" values to their objects
    obj.a = 3, obj.b = 4;
    obj.sum();
    console.assert(7 === obj.result, 'obj.result should be 7');
    obj.a = 5;
    obj.sum();
    console.assert(9 === obj.result, 'obj.result should be 9');

  }
  evaluate(example_methodsCanDoBoth);


  function example_twoMethods() {

    // pure functions can only get their values by argument
    //  and must return their value to the global scope
    function pureAdd(a, b) {
      return a + b;
    }
    const result1 = pureAdd(3, 4);

    // methods can also read or save values to their object using 'this'
    //  it's sort of like they have back-door access to their object
    const obj = {
      a: 0,
      b: 0,
      setAandB: function (a, b) {
        this.a = a;
        this.b = b;
      },
      sumAandB: function () {
        return this.a + this.b;
      }
    };

    obj.setAandB(3, 4);
    const result2 = obj.sumAandB();

  }
  evaluate(example_twoMethods);


  function refactor1() {

    // refactor this function into a method
    function mergeArrays(arr1, arr2) {
      return [...arr1, ...arr2];
    }

    const obj = {
      array: [3],
      mergeArrays: function (arrToMerge) { }
    }


    const merged1 = obj.mergeArrays([2]);
    console.assert(merged1[0] === 3, 'assert 1');
    console.assert(merged1[1] === 2, 'assert 2');

    const merged2 = obj.mergeArrays([2]);
    console.assert(merged2[0] === 3, 'assert 3');
    console.assert(merged2[1] === 2, 'assert 4');

    obj.array = ['hi!'];
    const merged3 = obj.mergeArrays(['bye!']);
    console.assert(merged3[0] === 'hi!', 'assert 5');
    console.assert(merged3[1] === 'bye!', 'assert 6');

    const merged4 = obj.mergeArrays(['bye!']);
    console.assert(merged4[0] === 'hi!', 'assert 7');
    console.assert(merged4[1] === 'bye!', 'assert 8');

  }
  evaluate(refactor1);


  function refactor2() {

    // refactor this function into a method
    function mergeArrays(arr1, arr2) {
      return [...arr1, ...arr2];
    }

    const obj = {
      array: [3],
      mergeArrays: function (arrToMerge) { }
    }

    obj.mergeArrays([2]);
    console.assert(obj.array[0] === 3, 'assert 1');
    console.assert(obj.array[1] === 2, 'assert 2');

    obj.mergeArrays(obj.array);
    console.assert(obj.array[0] === 3, 'assert 3');
    console.assert(obj.array[1] === 2, 'assert 4');
    console.assert(obj.array[2] === 3, 'assert 5');
    console.assert(obj.array[3] === 2, 'assert 6');

  }
  evaluate(refactor2);


  function refactor3() {

    // refactor this function to a method
    function remix(str, mixer) {
      return str.split('').join(mixer);
    }

    const obj = {
      mixer: '',
      remix: function (str) { }
    };

    console.assert(obj.remix('hello') === 'hello', 'assert 1');

    obj.mixer = '-';
    console.assert(obj.remix('hello') === 'h-e-l-l-o', 'assert 2');
    console.assert(obj.mixer === '-', 'assert 3');
    console.assert(obj.remix('hello') === 'h-e-l-l-o', 'assert 4');

  }
  evaluate(refactor3);


  function refactor4() {

    // refactor this function to a method
    function remix(str, mixer) {
      return str.split('').join(mixer);
    }

    const obj = {
      mixer: '',
      remixed: '',
      remix: function (str) { },
      getRemixed: function () { }
    };

    obj.remix('hello');
    console.assert(obj.remixed === 'hello', 'assert 1');

    obj.remix('hello');
    console.assert(obj.getRemixed() === 'hello', 'assert 2');

    obj.mixer = '-';
    obj.remix('hello');
    console.assert(obj.remixed === 'h-e-l-l-o', 'assert 3');
    console.assert(obj.getRemixed() === 'h-e-l-l-o', 'assert 4');
    console.assert(obj.mixer === '-', 'assert 5');

    obj.mixer = '0';
    obj.remix('111');
    console.assert(obj.remixed === '10101', 'assert 6');
    console.assert(obj.getRemixed() === '10101', 'assert 7');
    console.assert(obj.mixer === '0', 'assert 8');

  }
  evaluate(refactor4);





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
