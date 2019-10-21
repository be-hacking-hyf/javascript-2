function addStringHandler() {

  // read and process user input

  /* write the code to read the string input from the user */
  const stringToAdd = null;    //                   <-------------

  // pass user input through core logic (this works!  no need to change it)
  const isNumbery = object.addString(stringToAdd);

  // report result to user (this works, no need to change it!)
  viewSortedStringsHandler();

  // logs for developer
  console.log('\n--- addStringHandler ---');
  console.log('stringToAdd:', typeof stringToAdd, ',', stringToAdd);
  console.log('isNumbery:', typeof isNumbery, ',', isNumbery);

};
// connect this to it's button with an event listener!        <----------
