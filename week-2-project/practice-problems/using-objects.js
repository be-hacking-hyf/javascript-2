{
  const pageTitle = 'using objects';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {


  function readFromObject1() {

    const obj = {
      a: 0,
      getA: function () {return this.a },
      sumAB: function (b) {return this.a +b },
    };

    console.assert(obj.getA() === 0, '1: obj.getA() should return 0');
    console.assert(obj.sumAB(1) === 1, '1: obj.sumAB(1) should return 1');

    obj.a = 4;
    console.assert(obj.getA() === 4, '2: obj.getA() should return 4');
    console.assert(obj.sumAB(1) === 5, '2: obj.sumAB(1) should return 5');

    obj.a = -2;
    console.assert(obj.getA() === -2, '3: obj.getA() should return -2');
    console.assert(obj.sumAB(1) === -1, '3: obj.sumAB(1) should return -1');


  }
  evaluate(readFromObject1);


  function readFromObject2() {

    const obj = {
      word: '',
      getWord: function () { 
        if (typeof this.word === 'string'){
          return "the word is " + this.word
        }else {
          return this.word;   
        }     
         },
      concat: function (secondHalf) { return this.word.concat(secondHalf) },
    };

    console.assert(obj.getWord() === 'the word is ', `1: obj.getWord() should return 'the word is '`);
    console.assert(obj.concat('--') === '--', `1: obj.concat('--') should return '--'`);

    obj.word = 'hoy';
    console.assert(obj.getWord() === 'the word is hoy', `2: obj.getWord() should return "the word is hoy"`);
    console.assert(obj.concat('()') === 'hoy()', `2: obj.concat('()') should return 'hoy()'`);

    obj.word = ':)';
    console.assert(obj.getWord() === 'the word is :)', `3: obj.getWord() should return ':)'`);
    console.assert(obj.concat('-<-<') === ':)-<-<', `3: obj.concat('-<-<) should return ':)-<-<'`);

  }
  evaluate(readFromObject2);


  function readFromObject3() {

    const obj = {
      array: ['hi!'],
      getArray: function () { },
      getCopy: function () { },
    };

    const gottenArray1 = obj.getArray();
    console.assert(gottenArray1 === obj.array, '1: obj.getArray() should return obj.array');
    const copiedArray1 = obj.getCopy();
    console.assert(copiedArray1 !== obj.array, '1: obj.getCopy() should return a new array');
    console.assert(copiedArray1[0] === obj.array[0], '1: obj.getCopy() should return a copy of obj.array');

    obj.array = [0, 1];
    const gottenArray2 = obj.getArray();
    console.assert(gottenArray2 === obj.array, '2: obj.getArray() should return obj.array');
    const copiedArray2 = obj.getCopy();
    console.assert(copiedArray2 !== obj.array, '2: obj.getCopy() should return a new array');
    console.assert(copiedArray2[0] === obj.array[0], '2: obj.getCopy() should return a copy of obj.array A');
    console.assert(copiedArray2[1] === obj.array[1], '2: obj.getCopy() should return a copy of obj.array B');

    obj.array = [null, undefined, false]
    const gottenArray3 = obj.getArray();
    console.assert(gottenArray3 === obj.array, '3: obj.getArray() should return obj.array');
    const copiedArray3 = obj.getCopy();
    console.assert(copiedArray3 !== obj.array, '3: obj.getCopy() should return a new array');
    console.assert(copiedArray3[0] === obj.array[0], '3: obj.getCopy() should return a copy of obj.array A');
    console.assert(copiedArray3[1] === obj.array[1], '3: obj.getCopy() should return a copy of obj.array B');
    console.assert(copiedArray3[2] === obj.array[2], '3: obj.getCopy() should return a copy of obj.array C');

  }
  evaluate(readFromObject3);


  function writeToObject1() {

    const obj = {
      string: '',
      setString: function (str) { this.string = str},
      remixString: function (mixer) { this.string = this.string.split('').join(mixer) }
    }

    obj.setString('hoy');
    console.assert(obj.string === 'hoy', 'assert 1');

    obj.setString('mimi');
    console.assert(obj.string === 'mimi', 'assert 2');

    obj.remixString('|');
    console.assert(obj.string === 'm|i|m|i', 'assert 3');

    obj.setString('-_-');
    console.assert(obj.string === '-_-', 'assert 4');

    obj.remixString('.');
    console.assert(obj.string === '-._.-', 'assert 5');

    obj.remixString(`'`);
    console.assert(obj.string === `-'.'_'.'-`, 'assert 6');

    obj.setString(obj.string);
    console.assert(obj.string === `-'.'_'.'-`, 'assert 7');

  }
  evaluate(writeToObject1);


  function writeToObject2() {

    const obj = {
      number: 5,
      mod: 0,
      equals: 0,
      setNumber: function (num) { },
      modulo: function (modder) { }
    };

    obj.modulo(2);
    console.assert(obj.mod === 2, 'assert 1');
    console.assert(obj.equals === 1, 'assert 2');

    obj.setNumber(10);
    console.assert(obj.number === 10, 'assert 3');

    obj.setNumber(2);
    console.assert(obj.number === 2, 'assert 4');
    console.assert(obj.mod === 2, 'assert 5');
    console.assert(obj.equals === 1, 'assert 6');

    obj.modulo(6);
    console.assert(obj.mod === 6, 'assert 7');
    console.assert(obj.equals === 2, 'assert 8');

    obj.modulo(obj.number);
    console.assert(obj.number === 2, 'assert 9');
    console.assert(obj.mod === 2, 'assert 10');
    console.assert(obj.equals === 0, 'assert 11');

  }
  evaluate(writeToObject2);


  function writeToObject3() {

    const obj = {
      arr: [1, 0],
      merge: function (toMerge) { },
      replace: function (newArr) { },
    };

    obj.merge([4]);
    console.assert(obj.arr[0] === 4, 'assert 1');
    console.assert(obj.arr[1] === 1, 'assert 2');
    console.assert(obj.arr[2] === 0, 'assert 3');

    obj.replace(['hi!', 'bye!']);
    console.assert(obj.arr[0] === 'hi!', 'assert 4');
    console.assert(obj.arr[1] === 'bye!', 'assert 5');

    obj.merge([null]);
    console.assert(obj.arr[0] === null, 'assert 6');
    console.assert(obj.arr[1] === 'hi!', 'assert 7');
    console.assert(obj.arr[2] === 'bye!', 'assert 8');

    obj.merge(obj.arr);
    console.assert(obj.arr[0] === null, 'assert 9');
    console.assert(obj.arr[1] === 'hi!', 'assert 10');
    console.assert(obj.arr[2] === 'bye!', 'assert 11');
    console.assert(obj.arr[3] === null, 'assert 12');
    console.assert(obj.arr[4] === 'hi!', 'assert 13');
    console.assert(obj.arr[5] === 'bye!', 'assert 14');

  }
  evaluate(writeToObject3);


  function readAndWrite1() {

    const obj = {
      arr: [],
      merge: function (toMerge) { },
      replaceAll: function (newEntry) { },
      getRemixed: function (mixer) { },
      getCopy: function () { }
    };

    obj.merge([1, 2]);
    console.assert(obj.arr[0] === 1, 'assert 1');
    console.assert(obj.arr[1] === 2, 'assert 2');

    obj.replaceAll('~');
    console.assert(obj.arr[0] === '~', 'assert 3');
    console.assert(obj.arr[1] === '~', 'assert 4');

    const remixed = obj.getRemixed('|')
    obj.merge([remixed]);
    console.assert(obj.arr[0] === '~|~', 'assert 5');
    console.assert(obj.arr[1] === '~', 'assert 6');
    console.assert(obj.arr[2] === '~', 'assert 7');

    console.assert(obj.getCopy() !== obj.arr, 'assert 8');
    console.assert(obj.getCopy()[0] === '~|~', 'assert9');
    console.assert(obj.getCopy()[1] === '~', 'assert 10');
    console.assert(obj.getCopy()[2] === '~', 'assert 11');

    const finalRemix = obj.getRemixed('*');
    console.assert(finalRemix === '~|~*~*~', 'assert 12');

  }
  evaluate(readAndWrite1);


  function soMuchLikeTheProject() {

    const obj = {
      entries: {},
      newEntry: function (key, value) { },
      readEntry: function (key) { },
      updateEntry: function (key, newValue) { },
      deleteEntry: function (key) { },
      readAll: function () { }
    };

    console.assert(obj.newEntry('a', 0) === 0, 'assert 1');
    console.assert(obj.newEntry('b', 1) === 1, 'assert 2');
    console.assert(obj.newEntry('c', 2) === 2, 'assert 3');

    console.assert(obj.readEntry('b') === 1, 'assert 4');
    console.assert(obj.readEntry('d') === undefined, 'assert 5');

    console.assert(obj.updateEntry('a', 5) === 5, 'assert 6');
    console.assert(obj.readEntry('a') === 5, 'assert 7');

    console.assert(obj.deleteEntry('c') === true, 'assert 8');
    console.assert(obj.readEntry('c') === undefined, 'assert 9');

    console.assert(obj.readEntry('a') === 5, 'assert 10');
    console.assert(obj.readEntry('b') === 1, 'assert 11');
    console.assert(obj.readEntry('c') === undefined, 'assert 12');

    // read all returns a copy of obj.entries
    console.assert(obj.readAll() !== obj.entries, 'assert 13');
    const allRead = obj.readAll();
    console.assert(allRead.a === 5, 'assert 14');
    console.assert(allRead.b === 1, 'assert 15');
    console.assert(allRead.c === undefined, 'assert 16');
  }
  evaluate(soMuchLikeTheProject);


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
