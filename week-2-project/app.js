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
    if (Object(value) !== value) {return true};
    return false; 
  },
  hasKey: function (obj, key) {
    let keyList = Object.keys(obj);
      if(keyList.length >= 0){
        if(keyList.includes(key)){return true}
        else {return false}
    }
  }, 
  hasValue: function (obj, value) {
    let valueList = Object.values(obj);
      if(valueList.length >= 0){
        if(valueList.includes(value)){return true}
        else {return false}
    // if(Object.values(obj).includes(value)) {return true};
    // return false;
      }
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
    } 

    else {this.entries[key] = value;
          return true;}
    },
  removeEntry: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }
     delete this.entries[key];
     return true;
    
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
    }

     else {this.entries[key] = value;
          return true;}
    // write me!
  },
  readAll: function () {
    // return this.entries;
    var clonedObj = {...this.entries};
    return clonedObj;
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
    return newObj;
    
  },
  copyEntries: function() {
      let copied = this.entries;
      return copied;
  },
  findByValue: function (value) {
    if (typeof key !== 'string') { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (!this.hasValue(this.entries, value)) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }
    let copiedEntries = this.copyEntries();
    let newKey = Object.keys(copiedEntries).find(keyOfValue => copiedEntries[keyOfValue] === value);
    let requestedObj={};
        requestedObj[newKey]=value;
    return requestedObj;
  },
}
