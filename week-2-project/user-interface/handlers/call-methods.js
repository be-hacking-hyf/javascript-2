function getMethodsHandler() {
  // input is coming from the event
  const methodName = document.getElementById('method-name').value;


  // core logic
  // const result = object[e.method]();
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
  console.log(`\n--- getMethodsHandler ---`);
  console.log('methodName:', typeof methodName, ',', methodName);

}
const callItButton = document.getElementById('call-it');
callItButton.addEventListener('click', getMethodsHandler);
// connect this to it's button with an event listener!        <----------

