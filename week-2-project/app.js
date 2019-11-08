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
    return (obj.hasOwnProperty(key)); // SINGLE LINE SOLUTION
    
    // AlTERNATIVE SOLUTION //
    // let keyList = Object.keys(obj);
    //   if(keyList.length >= 0){
    //    if(keyList.includes(key)){return true}
    //     else {return false}
    // }
  }, 
  hasValue: function (obj, value) {
    return (Object.values(obj).indexOf(value) > -1); // SINGLE LINE SOLUTION
   
    // AlTERNATIVE SOLUTION-1 //
    // let valueList = Object.values(obj);
    //   if(valueList.length >= 0){
    //     if(valueList.includes(value)){return true}
    //     else {return false}

    // AlTERNATIVE SOLUTION-2 //
    // if(Object.values(obj).includes(value)) {return true};
    //    return false;
      
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
      console.log('haskey');
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }
    const newObj = {};
    newObj[key] = this.entries[key];
    return newObj;
    
  },
  // THIS METHOD SHOULD PASS THE TEST CASES, BECAUSE IT PASSES THE TEST CASES IN PRACTICE PROBLEMS
  findByValue: function (value) {  
    if (typeof key !== 'string') { // (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (!this.hasValue(this.entries, value)) { // (using this.hasValue)
        return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }
    
    let expectedObj = {};
    const copiedObj = {...this.entries};
    let keyArr = Object.keys(copiedObj).filter(element => copiedObj[element] === value);
    if(keyArr.length===0){
      return {};
    }else if (keyArr.length===1){
      expectedObj[key]=value;
      return expectedObj;
    }else if (keyArr.length>1){
      for (let i=0 ; i < keyArr.length ; i++ ) {
      expectedObj[keyArr[i]]=value;
      }
      return expectedObj;
    }
  },
}
