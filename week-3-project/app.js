const object = {
  currentKey: '',
  set currentEntry(key) {
    if (null) { // write this early return condition!
      throw new TypeError('set currentEntry: key should be a string');
    }
    if (null) { // write this early return condition! (using this.hasKey)
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }

    // write me!
  },
  get currentEntry() {
    // write me!
    // consider using this.findByKey & this.currentKey
  },
  likedKeys: [],
  get likedEntries() {
    // write me!
    // consider using .map & this.findByKey, then .reduce & Object.assign
    // this can be done in two steps:
    //   first, build an array of all the liked entries (this.findByKey)
    //   second, build a single object containing all of the liked entries
  },
  likeEntry: function (key) {
    if (null) { // write this early-return condition!
      return new TypeError('likeEntry: key should be a string');
    }
    if (null) { // write this early-return condition! (using this.hasKey)
      return new ReferenceError(`likeEntry: key "${key}" has been removed`);
    }
    if (null) { // write this early-return condition! (using .every())
      return new Error(`likeEntry: key "${key}" is already liked`);
    }

    // write me!
  },
  unlikeEntry: function (key) {
    if (null) { // write this early-return condition!
      return new TypeError('unlikeEntry: key should be a string');
    }
    if (null) { // write this early-return condition! (using .every())
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    }

    // write me!
    // consider using .filter
  },

  // everything below here is the same as last week's project
  // this week's project will build on top of last week's
  entries: {},
  isPrimitive: function (value) {
    // write me!
  },
  hasKey: function (obj, key) {
    // write me!
  },
  hasValue: function (obj, value) {
    // write me!
  },
  addEntry: function (key, value) {
    if (null) { // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (null) { // write me! (using this.isPrimitive)
      return new TypeError('addEntry: value should be a primitive');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new Error(`addEntry: key "${key}" already exists`) };
    }

    // write me!
  },
  removeEntry: function (key) {
    if (null) { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`removeEntry: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  updateEntry: function (key, value) {
    if (null) { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (null) { // write me! (using this.isPrimitive)
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`updateEntry: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  readAll: function () {
    // write me!
  },
  findByKey: function (key) {
    if (null) { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`findByKey: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  findByValue: function (value) {
    if (null) { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (null) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }

    // write me!
  },
}
