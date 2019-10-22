
const object = {
  currentKey: '',
  set currentEntry(key) {
    if (typeof key !== 'string') {
      throw new TypeError('set currentEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) {
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }

    this.currentKey = key;
  },
  get currentEntry() {
    return this.findByKey(this.currentKey);
  },
  likedKeys: [],
  get likedEntries() {
    return this.likedKeys
      .map(key => this.findByKey(key))
      .reduce((acc, entry) => Object.assign(acc, entry), {});
  },
  likeEntry: function (key) {
    if (typeof key !== 'string') {
      return new TypeError('likeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) {
      return new ReferenceError(`likeEntry: key "${key}" has been removed`);
    }
    if (!this.likedKeys.every(likedKey => likedKey !== key)) {
      return new Error(`likeEntry: key "${key}" is already liked`);
    }

    this.likedKeys.push(key);
    return true;
  },
  unlikeEntry: function (key) {
    if (typeof key !== 'string') {
      return new TypeError('unlikeEntry: key should be a string');
    }
    if (this.likedKeys.every(likedKey => likedKey !== key)) {
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    }

    this.likedKeys = this.likedKeys.filter(likedKey => likedKey !== key);
    return true;
  },
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

    return foundEntries
  },
}


// const object = {
//   currentKey: '',
//   set currentEntry(key) {
//     if (null) { // write this early return condition!
//       throw new TypeError('set currentEntry: key should be a string');
//     }
//     if (null) { // write this early return condition! (using this.hasKey)
//       throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
//     }

//     // write me!
//   },
//   get currentEntry() {
//     // write me!
//     // consider using this.findByKey
//   },
//   likedKeys: [],
//   get likedEntries() {
//     // write me!
//     // consider using .map & this.findByKey, then .reduce & Object.assign
//   },
//   likeEntry: function (key) {
//     if (null) { // write this early-return condition!
//       return new TypeError('likeEntry: key should be a string');
//     }
//     if (null) { // write this early-return condition! (using this.hasKey)
//       return new ReferenceError(`likeEntry: key "${key}" has been removed`);
//     }
//     if (null) { // write this early-return condition! (using .every())
//       return new Error(`likeEntry: key "${key}" is already liked`);
//     }

//     // write me!
//   },
//   unlikeEntry: function (key) {
//     if (null) { // write this early-return condition!
//       return new TypeError('unlikeEntry: key should be a string');
//     }
//     if (null) { // write this early-return condition! (using .every())
//       return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
//     }

//     // write me!
//     // consider using .filter
//   },

//   // everything below here is the same as last week's project
//   // this week's methods will use them
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

//     // write me!
//   },
// }
