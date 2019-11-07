function callItHandler() {

  // read user input
  // notice this: the UI doesn't allow you to enter invalid types!

  const methodName = document.getElementById('method-name').value;

  let args;
  if (methodName === 'addEntry' || methodName === 'updateEntry') {
    const valueValue = document.getElementById('value-value').value;
    const valueType = document.getElementById('value-type').value;
    args = [
      document.getElementById('key').value,
      typeCaster(valueType, valueValue)
    ];

  } else if (methodName === 'removeEntry' || methodName === 'findByKey') {
    args = [
      document.getElementById('key').value
    ];

  } else if (methodName === 'findByValue') {
    const valueValue = document.getElementById('value-value').value;
    const valueType = document.getElementById('value-type').value;
    args = [
      typeCaster(valueType, valueValue)
    ];

  } else {
    args = [];
  };


  // core logic
  const returned = object[methodName](...args);

  const result = returned === true
    ? object.readAll()
    : returned;

  // display to user
  const displayZone = document.getElementById('display-zone');
  while (displayZone.firstChild) {
    displayZone.removeChild(displayZone.firstChild);
  };

  const renderedOutput = result instanceof Error
    ? renderError(result)
    : renderObject(result);

  displayZone.appendChild(renderedOutput);

  // logs for developer
  console.log(`\n--- callItHandler ---`);
  console.log('methodName:', typeof methodName, ',', methodName);
  console.log('args:', typeof args, ',', args);
  console.log('result:', typeof result, ',', result);
}


const callItButton = document.getElementById('call-it');
callItButton.addEventListener('click', callItHandler);
// connect this to it's button with an event listener!        <----------

