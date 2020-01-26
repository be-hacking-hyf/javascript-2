{
  const pageTitle = 'project prep';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {


  const isPrimitiveTests = [
    { name: 'first', args: [false], expected: true },
    { name: 'second', args: [null], expected: true },
    { name: 'third', args: [''], expected: true },
    { name: 'fourth', args: [undefined], expected: true },
    { name: 'fifth', args: [0], expected: true },
    { name: 'sixth', args: [{}], expected: false },
    { name: 'seventh', args: [[]], expected: false },
    { name: 'eighth', args: [() => { }], expected: false },
    { name: 'ninth', args: [function () { }], expected: false },
    { name: 'tenth', args: [new WeakMap()], expected: false },
  ];
  function isPrimitive(thing) {
    if (Object(thing) !== thing) {return true};
    return false; 
  }
  isPrimitive.display = true;
  evaluate(isPrimitive, isPrimitiveTests);

  const hasKeyTests = [
    { name: 'first', args: [{ a: 0 }, 'a'], expected: true },
    { name: 'second', args: [{ b: 0 }, 'a'], expected: false },
    { name: 'third', args: [{ a: 0 }, 'b'], expected: false },
    { name: 'fourth', args: [{ b: 0 }, 'b'], expected: true },
    { name: 'fifth', args: [{ a: undefined }, 'a'], expected: true },
    { name: 'sixth', args: [{ b: undefined }, 'a'], expected: false },
    { name: 'seventh', args: [{ a: undefined }, 'b'], expected: false },
    { name: 'eighth', args: [{ b: undefined }, 'b'], expected: true },
  ];
  function hasKey(obj, key) {
    return (obj.hasOwnProperty(key));
      
    // if(Object.keys(obj).includes(key)) {
    //   const newObj = {};
    //   newObj[key] = obj[key];
    //   return newObj;
    // }
  };
       
    
  hasKey.display = true;
  evaluate(hasKey, hasKeyTests);


  const hasValueTests = [
    { name: 'first', args: [{ a: 0 }, 0], expected: true },
    { name: 'second', args: [{ b: 0 }, 1], expected: false },
    { name: 'third', args: [{ a: 1 }, 0], expected: false },
    { name: 'fourth', args: [{ b: 1 }, 1], expected: true },
    { name: 'fifth', args: [{ a: undefined }, undefined], expected: true },
    { name: 'sixth', args: [{ b: null, a: null }, null], expected: true },
    { name: 'seventh', args: [{ a: false, b: false }, true], expected: false },
  ];
  function hasValue(obj, value) {
    return (Object.values(obj).indexOf(value) > -1);
    // consider using Object.keys, .filter and obj.hasOwnProperty
  }
  hasValue.display = true;
  evaluate(hasValue, hasValueTests);


  const firstObj = { a: 0 };
  const secondObj = { a: 0, b: 1 };

  const modifyToObjectWithBracketsTests = [
    { name: 'first', args: [firstObj, 'x', 0], expected: { a: 0, x: 0 } },
    { name: 'second', args: [firstObj, 'x', 0], expected: { a: 0, x: 0 } },
    { name: 'third', args: [secondObj, 'a', 1], expected: { a: 1, b: 1 } },
    { name: 'fourth', args: [secondObj, 'a', 1], expected: { a: 1, b: 1 } },
    { name: 'fifth', args: [{}, 'b', 'hi!'], expected: { b: 'hi!' } },
  ];
  function modifyToObjectWithBrackets(obj, key, value) {
    let newObj={...obj};
    newObj[key] = value;
    return newObj;
    // (remember to avoid side effects)
  }
  modifyToObjectWithBrackets.display = true;
  evaluate(modifyToObjectWithBrackets, modifyToObjectWithBracketsTests)

  const deleteFromObjectTests = [
    { name: 'first', args: [firstObj, 'x'], expected: { a: 0 } },
    { name: 'second', args: [firstObj, 'a'], expected: {} },
    { name: 'third', args: [firstObj, 'x'], expected: { a: 0 } },
    { name: 'fourth', args: [secondObj, 'a'], expected: { b: 1 } },
    { name: 'fifth', args: [secondObj, 'b'], expected: { a: 0 } },
    { name: 'fifth', args: [{ b: 'hi!' }, 'b'], expected: {} },
  ];
  
  function deleteFromObject(obj, key) {
    
    let newObj={...obj};
    delete newObj[key];
    return newObj;
    // (remember to avoid side effects)
  }
  deleteFromObject.display = true;
  evaluate(deleteFromObject, deleteFromObjectTests)


  const findByKeyTests = [
    { name: 'first', args: [firstObj, 'x'], expected: {} },
    { name: 'second', args: [firstObj, 'a'], expected: { a: 0 } },
    { name: 'third', args: [firstObj, 'a'], expected: { a: 0 } },
    { name: 'fourth', args: [secondObj, 'a'], expected: { a: 0 } },
    { name: 'fifth', args: [secondObj, 'b'], expected: { b: 1 } },
    { name: 'fifth', args: [{ b: 'hi!' }, 'b'], expected: { b: 'hi!' } },
  ];
  function findByKey(obj, key) {
    const newObj2 = {};
    if (!obj.hasOwnProperty(key)){
      return newObj2;
    }
    newObj2[key] = obj[key];
    return newObj2;
    // (remember to avoid side effects)
  }
  findByKey.display = true;
  evaluate(findByKey, findByKeyTests)


  const findByValueTests = [
    { name: 'first', args: [firstObj, 0], expected: { a: 0 } },
    { name: 'second', args: [firstObj, 1], expected: {} },
    { name: 'third', args: [firstObj, 0], expected: { a: 0 } },
    { name: 'fourth', args: [secondObj, 0], expected: { a: 0 } },
    { name: 'fifth', args: [secondObj, 1], expected: { b: 1 } },
    { name: 'fifth', args: [{ b: 'hi!', c: 'hi!' }, 'hi!'], expected: { b: 'hi!', c: 'hi!' } },
  ];
  function findByValue(obj, value) {
    let objNew = {};
    const obje3 = {...obj};
    let key = Object.keys(obje3).filter(key => obje3[key] === value);
    if(key.length===0){
      return {};
    }else if (key.length===1){
      objNew[key]=value;
      return objNew;
    }else if (key.length>1){
      for (let i=0 ; i < key.length; i++) {
      objNew[key[i]]=value;
      }
      return objNew;
    // (remember to avoid side effects)
  }
}
  findByValue.display = true;
  evaluate(findByValue, findByValueTests)
  
} catch (err) {
  console.log(err);
  document.body.appendChild(
    evaluate.errorSearchComponent('.js file', err)
  );
}
{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
