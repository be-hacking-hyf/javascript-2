function callMethodsHandler() {
  // input is coming from the event
  /* write the code to read the string input from the user */
  const methodName = null; //             <---------------

  // core logic
  const result = object[methodName]();

  // display to user
  const displayZone = document.getElementById('display-zone');
  while (displayZone.firstChild) {
    displayZone.removeChild(displayZone.firstChild);
  };

  const renderedOutput = result instanceof Array
    ? renderArray(result, methodName)
    : renderNumber(result, methodName);

  displayZone.appendChild(renderedOutput);

  // logs for developer
  console.log(`\n--- callMethodsHandler ---`);
  console.log('methodName:', typeof methodName, ',', methodName);

}
// connect this to it's button with an event listener!        <----------

