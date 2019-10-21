{
  const pageTitle = 'this 101';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {


  function example_functionToMethod() {

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
  evaluate(example_functionToMethod);


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
