function typeCaster(type, value) {
  if (type === 'string') {
    // do nothing, values from the DOM are already strings!
    return value;
  } else if (type === 'number') {
    return Number(value);

  } else if (type === 'boolean') {
    return Boolean(value);

  } else if (type === 'object') {
    // there is no way to cast to null
    return null; // so just set it directly

  } else {
    return undefined;
  }
}
