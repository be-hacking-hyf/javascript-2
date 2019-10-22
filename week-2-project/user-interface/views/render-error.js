function renderError(err) {
  const codeElement = document.createElement('code');
  codeElement.innerHTML = `${err.name}: ${err.message}`;
  codeElement.style.color = 'red';

  const container = document.createElement('div');
  container.style = 'padding-left:30px';
  container.appendChild(codeElement);
  return container;
}
