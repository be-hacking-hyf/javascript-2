function addStringHandler() {

  // read and process user input

  /* write some code to read the string input from the user */
  // const stringToAdd = /* write me! */ null;
  const stringToAdd = document.getElementById('new-string-input').value;

  // pass user input through core logic (this works!  no need to change it)
  const isNumbery = object.addString(stringToAdd);

  // report result to user (this works, no need to change it!)
  viewSortedStringsHandler();

  // logs for developer
  console.log('\n--- addStringHandler ---');
  console.log('stringToAdd:', typeof stringToAdd, ',', stringToAdd);
  console.log('isNumbery:', typeof isNumbery, ',', isNumbery);

};
const addStringButton = document.getElementById('addString-button');
addStringButton.addEventListener('click', addStringHandler);
// connect this to it's button with an event listener!        <----------
