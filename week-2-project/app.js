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
    // write me!
    if (Object(value) !== value) {
      return true
    } 
    else {
     return false 
    }
  },
  hasKey: function (obj, key) {
    // write me!
    return (obj.hasOwnProperty(key));
  },
  hasValue: function (obj, value) {
    // write me!
    if(Object.values(obj).includes(value)) {
      return true
    }
    else {
    return false
    }
  },
  addEntry: function (key, value) {
    if (typeof key !== "string") { // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('addEntry: value should be a primitive');
    }
    if (this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new Error(`addEntry: key "${key}" already exists`);
    }
    else (this.entries[key] = value);{
      return true
    }
    // write me!
  },
  removeEntry: function (key) {
    if (typeof key !== "string") { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }
     delete this.entries[key];
    return true;
    
  },
    
  updateEntry: function (key, value) {
    if (typeof key !== "string") { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`updateEntry: no property "${key}" in this.entries`);
    }
    else {
      (this.entries[key] = value);
      return true;
    }
    // write me!
  },
  readAll: function () {
    // write me!
    var readObj = {... this.entries};
    return readObj;

  },
  findByKey: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
        console.log('haskey');
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }
        
    const newObj = {};
    newObj[key] = this.entries[key];
    return newObj;     // write me!
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
                // write me! (this one is a bit trickier)
  },
}
