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
    //if (typeof Object(value) === 'object') return true; 
    //return (value !== Object(value));
    var type = typeof value;
    return value == null || (type != "object" && type != "function");
  },
  hasKey: function (obj, key) {
    // write me!
    return obj != null && hasOwnProperty.call(obj, key);
  },
  hasValue: function (obj, value) {
    // write me!
    return (Object.values(obj).indexOf(value)> -1);
  },
  addEntry: function (key, value) {
    if (key='string') { // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (value !== Object(value)!== true) { // write me! (using this.isPrimitive)
      this.primitive=[];
      return new TypeError('addEntry: value should be a primitive');
    }
    if (this.entries[key]=value) { // write me! (using this.hasKey)
      
      return new Error(`addEntry: key "${key}" already exists`);
    }

    // write me!
    
  },
  removeEntry: function (key) {
    if (key!=="string") { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    
    if (this.hasOwnProperty(key)===true) { // write me! (using this.hasKey)// hasKey ile bilinmesi gereken hasOwnProperty
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }else
    return true; //BURAYA TEKRAR DON!!!!!

    // write me!
  },
  updateEntry: function (key, value) {
    if (key="string") { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (this.isPrimitive(value =='', arg)) { // write me! (using this.isPrimitive)
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (this.hasKey(key!==key)) { // write me! (using this.hasKey)
      return new ReferenceError(`updateEntry: no property "${key}" in this.entries`);
    }

    // write me!
  },
  readAll: function () {
    // write me!
    
  }, 
   
  findByKey: function (key) {
    if (key !== 'string') { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (this.hasKey === "string") { // write me! (using this.hasKey)
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }
//BURAYA TEKRAR DON
    // write me!
  },
  findByValue: function (value) {
    if  (value !== 'isPrimitive') { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (this.hasValue(value)) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }else return false; //BURAYA TEKRAR DON

    // write me! (this one is a bit trickier)
  },
}
