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


  function example_refactorMethodToGetter() {

    const obj1 = {
      name: 'obj1',
      getGreeting: function () {
        return `hi, I'm ${this.name}`;
      }
    }

    console.assert(obj1.getGreeting() === `hi, I'm obj1`, 'assert 1');
    obj1.name = 'brussels'
    console.assert(obj1.getGreeting() === `hi, I'm brussels`, 'assert 2');

    const obj2 = {
      name: 'obj2',
      get greeting() {
        return `hi, I'm ${this.name}`;
      }
    }

    console.assert(obj2.greeting === `hi, I'm obj2`, 'assert 3');
    obj2.name = 'belgium'
    console.assert(obj2.greeting === `hi, I'm belgium`, 'assert 4');

  }
  evaluate(example_refactorMethodToGetter);



  // more coming soon

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
