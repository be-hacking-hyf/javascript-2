const object = {
  currentKey: '',
  set currentEntry(key) {
    if (typeof key !== 'string' ) { // write the early return condition
      throw new TypeError('set currentEntry: key should be a string');
    }
    if (!this.entries.hasOwnProperty(key)) { // write the early return condition
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }
    this.currentEntry = key; // write me!
    
  },
  get currentEntry() {
    return this.entries[this.currentKey];
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
    if (Object(value) !== value) {return true};
    return false; // write me!
  },
  hasKey: function (obj, key) {
    return (obj.hasOwnProperty(key)); 
  },
  hasValue: function (obj, value) {
    if(Object.values(obj).includes(value)) {return true};
    return false; // write me!
  },
  addEntry: function (key, value) {
    if (typeof key !== 'string') { 
      return new TypeError('addEntry: key should be a string');
    } else if (!this.isPrimitive(value)) { 
      return new TypeError('addEntry: value should be a primitive');
    } else if (this.hasKey(this.entries, key)) {  
      return new Error(`addEntry: key "${key}" already exists`);
    } else {this.entries[key] = value;
      return true;} // write me!
  },
  removeEntry: function (key) {
    if (typeof key !== 'string') { 
      return new TypeError('removeEntry: key should be a string');
    } else if (!this.hasKey(this.entries, key)) { 
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }
     delete this.entries[key];
     return true; // write me!
  },
  updateEntry: function (key, value) {
    if (typeof key !== 'string') { 
      return new TypeError('updateEntry: key should be a string');
    } else if (!this.isPrimitive(value)) { 
      return new TypeError('updateEntry: value should be a primitive');
    } else if (!this.hasKey(this.entries, key)) { 
      return new ReferenceError(`updateEntry: no property "${key}" in this.entries`);
    }  else {this.entries[key] = value;
          return true;} // write me!
  },
  readAll: function () {
    let clonedObj = {...this.entries};
    return clonedObj; // write me!
  },
  findByKey: function (key) {
    if (typeof key !== 'string') { 
      return new TypeError('findByKey: key should be a string');
    } else if (!this.hasKey(this.entries, key)) { 
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }
    const newObj = {};
    newObj[key] = this.entries[key];
      return newObj; // write me!
  },
  copyEntries: function() {
    let copied = {...this.entries};
    return copied;
  },
  findByValue: function (value) {
    if (!this.isPrimitive(value)) { 
      return new TypeError('findByValue: value should be a primitive');
    } else if (!this.hasValue(this.entries, value)) { 
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }
      let copiedEntries = this.copyEntries();
      let requestedObj={};
      let newKey = Object.keys(copiedEntries).filter(keyOfValue => copiedEntries[keyOfValue] === value);
        for (let i = 0; i < newKey.length; i++) {
          if (this.entries[newKey[i]] === value) {
            requestedObj[newKey[i]] = value;
          }
        }
            return requestedObj;// write me!
  },
}

