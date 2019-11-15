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
    return true;
    // write me!
  },
  get currentEntry() {
    if (!this.entries.hasOwnProperty(this.currentKey)) {
      return {[this.currentKey]: new ReferenceError (`findByKey: no property "${this.currentKey}" in this.entries`)};
      }
    return {[this.currentKey]: this.entries[this.currentKey]};
    // write me!
  },
  likedKeys: [],

  get likedEntries() {
    let obj = {};    
    let length = this.likedKeys.length;        
    for (let i=0; i<length; i++) {      
      let likedKey = this.likedKeys[i];
      
      const a =  this.findByKey(likedKey);  
     
      if ( a instanceof ReferenceError) {

        obj[likedKey] = a;
      }
      obj[likedKey] = this.entries[likedKey];
    }
     return obj;

    // write me!
  },
  likeEntry: function (key) {
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
    return true;
    // write me!
  },
  unlikeEntry: function (key) {
    if (typeof key !== 'string') { // write the early return condition
      return new TypeError('unlikeEntry: key should be a string');
    }    
    if (!this.likedKeys.includes(key)) { // write the early return condition
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    };  
    this.likedKeys = this.likedKeys.filter(likedKey => likedKey!==key);
    return true;
    // write me!
  },
  entries: {},
  isPrimitive: function (value) {
    let arr = ['boolean', 'number', 'undefined', 'string'];
    return arr.includes(typeof value)|| value === null;
    // write me!
  },
  hasKey: function (obj, key) {
    return obj.hasOwnProperty(key);

    // write me!
  },
  hasValue: function (obj, value) {
    let arr = Object.values(obj);
    return arr.includes(value);
    // write me!
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
    // write me!
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
    // write me!
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
    // write me!
  },
}

