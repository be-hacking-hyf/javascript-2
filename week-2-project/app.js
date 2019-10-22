/*
  many of the exercises have focused on avoiding side effects
  this project is the opposite, you want to modify object.entries
  otherwise how can it save anything!

  You can even think of this week's object as a mini data base
  - there's a store of data in object.entries
  - and users can access & modify that data
*/
const object = {
  entries: {},
  isPrimitive: function (value) {
    if (typeof value === 'function') {
      return false;
    } else if (typeof value === 'object' && value !== null) {
      return false;
    } else {
      return true;
    }
  },
  hasKey: function (obj, key) { return obj.hasOwnProperty(key) },
  hasValue: function (obj, value) {
    return !Object.keys(obj).every(key => obj[key] !== value);
  },
  addEntry: function (key, value) {
    if (typeof key !== 'string') {
      return new TypeError('addEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) {
      return new TypeError('addEntry: value should be a primitive');
    }
    if (this.hasKey(this.entries, key)) {
      return { [key]: new Error(`addEntry: key "${key}" already exists`) };
    }

    this.entries[key] = value;
    return true;
  },
  removeEntry: function (key) {
    if (typeof key !== 'string') {
      return new TypeError('removeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) {
      return { [key]: new ReferenceError(`removeEntry: no property "${key}" in this.entries`) };
    }

    delete this.entries[key];
    return true;
  },
  updateEntry: function (key, value) {
    if (typeof key !== 'string') {
      return new TypeError('updateEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) {
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (!this.hasKey(this.entries, key)) {
      return { [key]: new ReferenceError(`updateEntry: no property "${key}" in this.entries`) };
    }

    this.entries[key] = value;
    return true;
  },
  readAll: function () {
    return Object.assign({}, this.entries);
  },
  findByKey: function (key) {
    if (typeof key !== 'string') {
      return new TypeError('findByKey: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) {
      return { [key]: new ReferenceError(`findByKey: no property "${key}" in this.entries`) };
    }

    return { [key]: this.entries[key] };
  },
  findByValue: function (value) {
    if (!this.isPrimitive(value)) {
      return new TypeError('findByValue: value should be a primitive');
    }
    if (!this.hasValue(this.entries, value)) {
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }

    const matchingKeys = Object.keys(this.entries)
      .filter(key => this.entries[key] === value)
    // .reduce((acc, key) => acc[key] = value, {});

    const foundEntries = {};
    matchingKeys.forEach(key => foundEntries[key] = value);

    return foundEntries;
  },
}


// const object = {
//   entries: {},
//   isPrimitive: function (value) {
//     // write me!
//   },
//   hasKey: function (obj, key) {
//     // write me!
//   },
//   hasValue: function (obj, value) {
//     // write me!
//   },
//   addEntry: function (key, value) {
//     if (null) { // write me!
//       return new TypeError('addEntry: key should be a string');
//     }
//     if (null) { // write me! (using this.isPrimitive)
//       return new TypeError('addEntry: value should be a primitive');
//     }
//     if (null) { // write me! (using this.hasKey)
//       return { [key]: new Error(`addEntry: key "${key}" already exists`) };
//     }

//     // write me!
//   },
//   removeEntry: function (key) {
//     if (null) { // write me!
//       return new TypeError('removeEntry: key should be a string');
//     }
//     if (null) { // write me! (using this.hasKey)
//       return { [key]: new ReferenceError(`removeEntry: no property "${key}" in this.entries`) };
//     }

//     // write me!
//   },
//   updateEntry: function (key, value) {
//     if (null) { // write me!
//       return new TypeError('updateEntry: key should be a string');
//     }
//     if (null) { // write me! (using this.isPrimitive)
//       return new TypeError('updateEntry: value should be a primitive');
//     }
//     if (null) { // write me! (using this.hasKey)
//       return { [key]: new ReferenceError(`updateEntry: no property "${key}" in this.entries`) };
//     }

//     // write me!
//   },
//   readAll: function () {
//     // write me!
//   },
//   findByKey: function (key) {
//     if (null) { // write me!
//       return new TypeError('findByKey: key should be a string');
//     }
//     if (null) { // write me! (using this.hasKey)
//       return { [key]: new ReferenceError(`findByKey: no property "${key}" in this.entries`) };
//     }

//     // write me!
//   },
//   findByValue: function (value) {
//     if (null) { // write me! (using this.isPrimitive)
//       return new TypeError('findByValue: value should be a primitive');
//     }
//     if (null) { // write me! (using this.hasValue)
//       return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
//     }

//     // write me! (this one is a bit trickier)
//   },
// }
