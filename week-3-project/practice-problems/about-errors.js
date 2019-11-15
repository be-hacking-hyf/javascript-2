// debugging & dev tools
// devtools: https://developers.google.com/web/tools/chrome-devtools/javascript
// https://javascript.info/debugging-chrome
// https://developers.google.com/web/tools/chrome-devtools/javascript/step-code
// https://blog.bitsrc.io/debugging-javascript-like-a-pro-a2e0f6c53c2e
​
// callstack
// Philip Guo: https://www.youtube.com/watch?v=bJUmxDsaduY&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=6
// https://github.com/janke-learning/function-exercises/blob/master/callstack.md
// https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/
​
// errors & handling them
// https://github.com/janke-learning/errors-and-life-cycle
// https://scotch.io/tutorials/proper-error-handling-in-javascript
// http://javascript.info/error-handling
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#throw_statement
// CodingSrc, error handling: https://www.youtube.com/watch?v=ye-aIwGJKNg
// FCC, error handling: https://www.youtube.com/watch?v=cFTFtuEQ-10
​
​
{
  const pageTitle = 'errors & handling them';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
​
try {
​
​
  function example_throwingStopsYourProgram() {
​
    // throwing will stop JS execution
    // whatever you throw will be logged for the developer
    console.log('before throw');
    throw 'hi!';
    console.log('after throw');
​
    // unless you try/catch!
    try {
      throw { a: 1 };
    } catch (err) {
      console.log(err);
    }
    try {
      throw undefined;
    } catch (err) {
      console.log(err);
    }
    try {
      throw 99;
    } catch (err) {
      console.log(err);
    }
​
  }
  example_throwingStopsYourProgram.display = true;
  evaluate(example_throwingStopsYourProgram);
​
  function example_throwingVsReturningErrors() {
​
    // returning errors is very helpful to let others know what went wrong and where
    // developers can use this information to debug, or make decisions
    function returnsAnError(msg) {
      return new Error(msg);
    }
​
    // throwing an error stops the program on that line
    function throwsAnError(msg) {
      throw new Error(msg);
    }
​
    const returnedError = returnsAnError('returned');
    console.log(returnedError.message);
    console.log(returnedError.stack);
​
    const thrownError = throwsAnError('thrown');
    // nothing will happen after here!
    console.log(returnedError.message);
    console.log(returnedError.stack);
​
  }
  example_throwingVsReturningErrors.display = true;
  evaluate(example_throwingVsReturningErrors);
​
​
  function example_whatAreErrors() {
​
    // Errors are just another type in JS
    // you can test if something is an error using -> x instanceof Error
​
    const isTrueAnError = true instanceof Error;
    const isNullAnError = null instanceof Error;
    const areStringsAnError = '' instanceof Error;
    const isUndefinedAnError = undefined instanceof Error;
    const areObjectsErrors = {} instanceof Error;
    const areArraysErrors = [] instanceof Error;
    const areFunctionsErrors = function () { } instanceof Error;
    const typeErrorIsError = new TypeError() instanceof Error;
    const referenceErrorIsError = new ReferenceError() instanceof Error;
    const errorIsError = new Error() instanceof Error;
​
    // typeof is not so helpful
    const typeofTypeError = typeof new TypeError();
    const typeofRferenceError = typeof new ReferenceError();
    const typeofError = typeof new Error();
  }
  example_whatAreErrors.display = true;
  evaluate(example_whatAreErrors);
​
​
  function example_errorsHaveHelpfulProperties() {
    const firstError = new Error('first');
    const secondError = new TypeError('second');
    const thirdError = new ReferenceError('third');
​
    // the .name property says what type of error it is
    console.log(firstError.name);
    console.log(secondError.name);
    console.log(thirdError.name);
​
    // the .message property contains extra helpful information
    console.log(firstError.message);
    console.log(secondError.message);
    console.log(thirdError.message);
​
    // the .stack property helps you figure out where/when the error was created
    //  this information include line numbers, file names, and function calls
    console.log(firstError.stack);
    console.log(secondError.stack);
    console.log(thirdError.stack);
  }
  example_errorsHaveHelpfulProperties.display = true;
  evaluate(example_errorsHaveHelpfulProperties);
​
  function example_jsThrowsErrorsWhenYouDoSomethingIllegal() {
​
    // all the previous examples demonstrated
    //  errors as objects
    //  throw'ing on purpose
    // hopefully these two concepts will help you understand native JS errors
​
    try {
      4();
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
      console.log(err.stack);
    };
​
    try {
      nonExistant.property;
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
      console.log(err.stack);
    };
​
    try {
      true.push(x => x);
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
      console.log(err.stack);
    };
​
​
  }
  example_jsThrowsErrorsWhenYouDoSomethingIllegal.display = true;
  evaluate(example_jsThrowsErrorsWhenYouDoSomethingIllegal);
​
​
} catch (err) {
  console.log(err);
  document.body.appendChild(
    evaluate.errorSearchComponent('.js file', err)
  );
}
​
{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}