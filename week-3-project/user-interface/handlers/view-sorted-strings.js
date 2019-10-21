function viewSortedStringsHandler() {

  // no input, no logic

  // display to user
  const displayZone = document.getElementById('display-zone');
  while (displayZone.firstChild) {
    displayZone.removeChild(displayZone.firstChild);
  };

  const numberyList = renderArray(object.numberyStrings, 'numbery');
  const NaNyList = renderArray(object.NaNyStrings, 'NaNy');

  displayZone.appendChild(numberyList);
  displayZone.appendChild(NaNyList);

  // logs for developer
  console.log(`\n--- viewSortedStringsHandler ---`);
  console.log('object.numberyStrings:',
    object.numberyStrings.constructor.name,
    ',', object.numberyStrings);
  console.log('object.NaNyStrings:',
    object.NaNyStrings.constructor.name,
    ',', object.NaNyStrings);
}
const sortedStringsButton = document.getElementById('view-sorted-strings');
sortedStringsButton.addEventListener('click', viewSortedStringsHandler);
// connect this to it's button with an event listener!        <----------

