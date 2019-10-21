function renderArray(arr, name) {
  const h2Element = document.createElement('h2');
  h2Element.innerHTML = name;

  const olElement = document.createElement('ol');
  olElement.start = 0;
  arr.forEach(item => {
    const liElement = document.createElement('li');
    liElement.innerHTML = typeof item === 'string'
      ? `"${item}"`
      : item;
    olElement.appendChild(liElement);
  });

  const container = document.createElement('div');
  container.id = name;
  container.style = 'padding-left:30px';
  container.appendChild(h2Element);
  container.appendChild(olElement);
  return container;
}
