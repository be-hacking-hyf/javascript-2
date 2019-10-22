function renderObject(obj) {

  const container = document.createElement('div');
  container.id = 'entries';
  container.style = 'padding-left:30px';

  Object.keys(obj).forEach(key => {
    const summaryElement = document.createElement('summary');
    summaryElement.innerHTML = key;
    obj[key] instanceof Error
      ? summaryElement.style.color = 'red'
      : null;

    const preElement = document.createElement('pre');
    preElement.innerHTML = `${typeof obj[key]}: ${obj[key]}`;

    const detailsElement = document.createElement('details');
    detailsElement.appendChild(summaryElement);
    detailsElement.appendChild(preElement);

    container.appendChild(detailsElement);
  });

  return container;
}
