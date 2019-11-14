const object = {
  currentKey: '',
  set currentEntry(key) {
    if (typeof key !== 'string') { // write the early return condition
      throw new TypeError('set currentEntry: key should be a string');
    }
    if (!this.entries.hasOwnProperty(key)) { // write the early return condition
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }
    this.currentKey = key;
    // write me!
  },
  get currentEntry() {
    // debugger;
      if (this.removed === false) {return this.findByKey(this.currentKey)}
       else return { [this.currentKey]: this.entries[this.currentKey] };
  },
     
  likedKeys: [],
  get likedEntries() {
    
    
    return { [this.likedKeys]: this.entries[this.likedKeys] };    
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
    return false; 
  },
  hasKey: function (obj, key){
    return (obj.hasOwnProperty(key));// write me!
   },
  hasValue: function (obj, value) {
    if(Object.values(obj).includes(value)) {return true};
    return false;
  },
  addEntry: function (key, value) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('addEntry: value should be a primitive');
    }

    if (this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new Error(`addEntry: key "${key}" already exists`);
    } else {this.entries[key] = value;
          return true;}
  },
  removed: true,
  removeEntry: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    else if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }
    else {delete this.entries[key];
          this.removed = !this.removed;
          return true;}
    },
  updateEntry: function (key, value) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`updateEntry: no property "${key}" in this.entries`);
    }  else {this.entries[key] = value;
          return true;}
  },
  readAll: function () {
    let clonedObj = {...this.entries};
    return clonedObj;
  },
  findByKey: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      // console.log('haskey');
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }
    const newObj = {};
    newObj[key] = this.entries[key];
    return newObj;
  },
  copyEntries: function() {
    let copied = {...this.entries};
    return copied;
    },
  findByValue: function (value) {
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
      }
      if (!this.hasValue(this.entries, value)) { // write me! (using this.hasValue)
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
       return requestedObj; 
  },
}

