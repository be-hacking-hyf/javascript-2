// https://javascript.info/property-accessors
// https://www.developerdrive.com/javascript-getters-setters/
// mosh: https://www.youtube.com/watch?v=bl98dm7vJt0
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

{
  const pageTitle = 'getters and setters';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

try {


  function getterRefactor1() {

    const obj1 = {
      name: 'obj1',
      getGreeting: function () {
        return `hi, I'm ${this.name}`;
      }
    }

    const obj2 = {
      name: 'obj2',
      get greeting() {
        // write me!
      }
    }

    const obj1Greeting1 = obj1.getGreeting();
    console.assert(obj1Greeting1 === `hi, I'm obj1`, `obj1's greeting is correct (1)`);

    const obj2Greeting1 = null; // fix this line!
    console.assert(obj2Greeting1 === `hi, I'm obj2`, `obj2's greeting is correct (1)`);

    obj1.name = "first";
    obj2.name = "second";

    const obj1Greeting2 = obj1.getGreeting();
    console.assert(obj1Greeting2 === `hi, I'm first`, `obj1's greeting is correct (2)`);

    const obj2Greeting2 = null; // fix this line!
    console.assert(obj2Greeting2 === `hi, I'm second`, `obj2's greeting is correct (2)`);

  }
  getterRefactor1.display = true;
  evaluate(getterRefactor1);


  function getterRefactor2() {

    const obj1 = {
      numbers: [12, 4, 9, 36, 7, 0, -2],
      modulo: 3,
      getZeroMods: function () {
        return this.numbers.filter(x => x % this.modulo === 0);
      }
    }

    const obj2 = {
      numbers: [12, 4, 9, 36, 7, 0, -2],
      modulo: 3,
      get zeroMods() {
        // write me!
      }
    }

    const obj1mods3 = null;
    console.assert(obj1mods3[0] === 12, 'assert 1');
    console.assert(obj1mods3[1] === 9, 'assert 2');
    console.assert(obj1mods3[2] === 36, 'assert 3');

    const obj2mods3 = null;
    console.assert(obj2mods3[0] === 12, 'assert 4');
    console.assert(obj2mods3[1] === 9, 'assert 5');
    console.assert(obj2mods3[2] === 36, 'assert 6');


    obj1.modulo = 6;
    obj2.modulo = 6;

    const obj1mods3second = null;
    console.assert(obj1mods3second[0] === 12, 'assert 7');
    console.assert(obj1mods3second[1] === 36, 'assert 8');

    const obj2mods3second = null;
    console.assert(obj2mods3second[0] === 12, 'assert 9');
    console.assert(obj2mods3second[1] === 36, 'assert 10');

  }
  getterRefactor2.display = true;
  evaluate(getterRefactor2);


  function getterRefactor3() {

    const obj1 = {
      entries: { first: 'hi!', second: 'bye!' },
      currentKey: 'second',
      getCurrentEntry: function () {
        return this.entries[this.currentKey];
      }
    }

    const obj2 = {
      entries: { first: 'hi!', second: 'bye!' },
      currentKey: 'second',
      get currentEntry() {
        // write me!
      }
    }

    // replace the null's to pass the asserts:

    const obj1current1 = null;
    console.assert(obj1current1 === 'bye!', 'assert 1');

    const obj2current1 = null;
    console.assert(obj2current1 === 'bye!', 'assert 2');

    obj1.currentKey = null;
    obj2.currentKey = null;

    const obj1current2 = null;
    console.assert(obj1current2 === 'hi!', 'assert 3');

    const obj2current2 = null;
    console.assert(obj2current2 === 'hi!', 'assert 4');

  }
  getterRefactor3.display = true;
  evaluate(getterRefactor3);



  function setterRefactor1() {

    const obj1 = {
      greeting: ``,
      setGreetingName: function (newName) {
        this.greeting = `hi, I'm ${newName}!`;
      }
    };

    const obj2 = {
      greeting: ``,
      set greetingName(newName) {
        // write me!
      }
    };

    obj1.setGreetingName('obj1');
    console.assert(obj1.greeting === "hi, I'm obj1!", 'assert 1');

    ; // write me!
    console.assert(obj2.greeting === "hi, I'm obj2!", 'assert 2');

    obj1.setGreetingName('hi');
    console.assert(obj1.greeting === "hi, I'm hi!", 'assert 3');

    ; // write me!
    console.assert(obj2.greeting === "hi, I'm bye!", 'assert 4');

  }
  setterRefactor1.display = true;
  evaluate(setterRefactor1);


  function setterRefactor2() {




  }
  setterRefactor2.display = true;
  evaluate(setterRefactor2);


  function setterRefactor3() {

    const obj1 = {
      entries: { first: 'hi!', second: 'bye!' },
      current: {},
      setCurrentEntry: function (key) {
        if (this.entries.hasOwnProperty(key)) {
          this.current = { [key]: this.entries[key] };
        } else {
          this.current = { [key]: new Error(`no entry with key "${key}"`) }
        }
      }
    }

    const obj2 = {
      entries: { first: 'hi!', second: 'bye!' },
      current: {},
      // write me!
    }

    obj1.setCurrentEntry('second');
    console.assert(obj1.current.second === "bye!", 'assert 1');

    ; // write me!
    console.assert(obj2.current.second === "bye!", 'assert 2');


    obj1.setCurrentEntry('first');
    console.assert(obj1.current.first === "hi!", 'assert 3');
    console.assert(obj1.current.hasOwnProperty('second') === false, 'assert 4');

    ; // write me!
    console.assert(obj2.current.first === "hi!", 'assert 5');
    console.assert(obj2.current.hasOwnProperty('second') === false, 'assert 6');


    obj1.setCurrentEntry('hi');
    console.assert(obj1.current.hi.message === 'no entry with key "hi"', 'assert 7');
    console.assert(obj1.current.hasOwnProperty('first') === false, 'assert 8');

    ; // write me!
    console.assert(obj2.current.hi.message === 'no entry with key "hi"', 'assert 9');
    console.assert(obj2.current.hasOwnProperty('first') === false, 'assert 10');

  }
  setterRefactor3.display = true;
  evaluate(setterRefactor3);



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
