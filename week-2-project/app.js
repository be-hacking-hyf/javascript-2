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
    let arr = ['boolean', 'number', 'undefined', 'string'];
    return arr.includes(typeof value)|| value === null;
    // write me!
  },
  hasKey: function (obj, key) {
    let arr = Object.keys(obj);
    return arr.includes(key);
    // write me!
  },
  hasValue: function (obj, value) {
    let arr = Object.values(obj);
    return arr.includes(value);
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
    this.entries[key] = value;
    return true;
    
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
    this.entries[key] = value;
    return true;
    // write me!
  },
  readAll: function () {
    const a = {...this.entries};
    return a;
    // write me!
  },
  findByKey: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }
    let value = this.entries[key];
    let obj = {};
    obj[key] = value;
    return obj;

    // write me!
  },
  findByValue: function (value) {
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (!this.hasValue(this.entries, value)) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }
    let arrOfKeys = Object.keys(this.entries);
    let arrOfValues = Object.values(this.entries);
    let arrOfIndex = [];
    let index = arrOfValues.indexOf(value);
    while (index!= -1){
      arrOfIndex.push(index);
      index = arrOfValues.indexOf(value, index+1);
    }
    let obj = {};
    for (let i=0; i<arrOfIndex.length;i++) {
      let key = arrOfKeys[arrOfIndex[i]];
      obj[key]=value;
    }
    return obj;
  },
}
