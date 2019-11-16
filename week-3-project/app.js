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
  },
  get currentEntry() {
      const entry = this.findByKey(this.currentKey);
    if (entry instanceof Error) {
      return {[this.currentKey]:entry}
    } else {
      return entry;
    }
  },
  likedKeys: [],
  get likedEntries() {
    let likedObject = {};
    for (let i=0 ; i < this.likedKeys.length ; i++){
      let likedEntry = this.findByKey(this.likedKeys[i]);
      if (likedEntry instanceof Error) {
        likedObject[this.likedKeys[i]] = likedEntry
      } else {
        likedObject[this.likedKeys[i]] = this.entries[this.likedKeys[i]]; 
      }
    }
    return likedObject;
  },
  likeEntry: function (key) {
    // debugger;
    if (typeof key !== 'string') { // write the early return condition
      return new TypeError('likeEntry: key should be a string');
    }
    if (!this.entries.hasOwnProperty(key)) { // write the early return condition
      return new ReferenceError(`likeEntry: key "${key}" has been removed`);
    }
    if (this.likedKeys.includes(key)) { // write the early return condition
      return new Error(`likeEntry: key "${key}" is already liked`);
    }
    this.likedKeys.push(key);
    if (this.addEntry()){
      return true;
    }
  },
  unlikeEntry: function (key) {
    if (typeof key !== 'string') { // write the early return condition
      return new TypeError('unlikeEntry: key should be a string');
    }
    if (!this.likedKeys.includes(key)) { // write the early return condition
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    }
    this.likedKeys.unshift(key);
    return true;
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
  removeEntry: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    else if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }
    else {delete this.entries[key];
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
  findByValue: function(value) {
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

