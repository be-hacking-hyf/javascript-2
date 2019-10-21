function renderNumber(num, name) {
  const h2Element = document.createElement('h2');
  h2Element.innerHTML = `${name}: ${num}`;

  const container = document.createElement('div');
  container.id = name;
  container.style = 'padding-left:30px';
  container.appendChild(h2Element);
  return container;
}
