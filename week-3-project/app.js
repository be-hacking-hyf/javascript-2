const object = {
  currentKey: '',
  set currentEntry(key) {
    if (null) { // write the early return condition
      throw new TypeError('set currentEntry: key should be a string');
    }
    if (null) { // write the early return condition
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }

    // write me!
  },
  get currentEntry() {
    // write me!
  },
  likedKeys: [],
  get likedEntries() {

    // write me!
  },
  likeEntry: function (key) {
    if (null) { // write the early return condition
      return new TypeError('likeEntry: key should be a string');
    }
    if (null) { // write the early return condition
      return new ReferenceError(`likeEntry: key "${key}" has been removed`);
    }
    if (null) { // write the early return condition
      return new Error(`likeEntry: key "${key}" is already liked`);
    }

    // write me!
  },
  unlikeEntry: function (key) {
    if (null) { // write the early return condition
      return new TypeError('unlikeEntry: key should be a string');
    }
    if (null) { // write the early return condition
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    }

    // write me!
  },
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
    // write me!
  },
  removeEntry: function (key) {
    // write me!
  },
  updateEntry: function (key, value) {
    // write me!
  },
  readAll: function () {
    // write me!
  },
  findByKey: function (key) {
    // write me!
  },
  findByValue: function (value) {
    // write me!
  },
}

