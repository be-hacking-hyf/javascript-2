const object = {
  numberyStrings: [],
  NaNyStrings: [],
  // evenStringsArr: [],
  isNumberyString: function (param) {
    // return typeof param === 'string' && !isNaN(param);
    return typeof param !== 'string' ? false :isNaN(param) ? false : true;
  },
  addString: function (param) {
  if (typeof param !== 'string') return false; // write this early return condition
    
  else if (isNaN(param)) {this.NaNyStrings.push(param);}
  
  else if (!isNaN(param)) {this.numberyStrings.push(param);}
  return true;
  },
  allStrings: function () {
    
    if (this.NaNyStrings.length===0) return this.numberyStrings;
    if(this.numberyStrings.length===0) return this.NaNyStrings;
    return this.numberyStrings.concat(this.NaNyStrings);
  },
  evenStrings: function () {
    
    if ((this.NaNyStrings.length!==0) && (this.numberyStrings.length===0)) 
    return this.numberyStrings;
      else if ((this.NaNyStrings.length===0) && (this.numberyStrings.length!==0)){
        function checkEven(num) {return num%2 === 0};
        return this.numberyStrings.filter(checkEven);
      }
      else if ((this.NaNyStrings.length!==0) && (this.numberyStrings.length!==0)){
        function checkEven(num) {return num%2 === 0};
        return this.numberyStrings.filter(checkEven);
      }
   },
  oddStrings: function () {
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
    return this.numberyStrings;
    else if ((this.NaNyStrings.length===0) && (this.numberyStrings.length!==0)){
      function checkOdd(num) {return num%2 !== 0};
      return this.numberyStrings.filter(checkOdd);
    }
    else if ((this.NaNyStrings.length!==0) && (this.numberyStrings.length!==0)){
      function checkOdd(num) {return num%2 !== 0};
      return this.numberyStrings.filter(checkOdd);
    }
  },
  negativeStrings: function () {
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
    return this.numberyStrings;
    else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      function checkNegative(num) {return num < 0};
      return this.numberyStrings.filter(checkNegative);
    }
    else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
      function checkNegative(num) {return num < 0};
      return this.numberyStrings.filter(checkNegative);
    }
  },
  positiveStrings: function () {
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
    return this.numberyStrings;
    else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      function checkPozitive(num) {return num > 0};
      return this.numberyStrings.filter(checkPozitive);
    }
    else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
      function checkPozitive(num) {return (num > 0 || num === "")};
      return this.numberyStrings.filter(checkPozitive);
    }
  },
  zeroStrings: function () {

    return this.numberyStrings.filter(num => num == 0);

    // if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
    // return this.numberyStrings;
    // else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
    //   function checkZero(num) {return (num == 0)}
    //   return this.numberyStrings.filter(checkZero);
    // }else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
    //     function checkZero(num) {return (num == 0)}
    //     return this.numberyStrings.filter(checkZero);
    // }
  },
  numberyAsNumbers: function () {
    return this.numberyStrings.map(str => Number(str)); // in one line

    // in multiple lines

    /* if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
        return this.numberyStrings;
      else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
         function returnNumberyStrings(num) { return Number(num);}
         return this.numberyStrings.map(returnNumberyStrings);}
       else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
         function returnNumberyStrings(num) { return Number(num);}
         return this.numberyStrings.map(returnNumberyStrings);} */
  },
  NaNyAsNumbers: function () {
    return this.NaNyStrings.map( str => Number(str)); 
  },
  sumOfNumbery: function () {
  if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0 ) {
    return 0;
  } 
    function add(a, b) { return (a + b) };
    return this.numberyAsNumbers().reduce(add);
  },

  sumOfNaNy: function () {
    if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0) {
      return NaN;
    }
    function add(a, b) { return (a + b) };
    return this.NaNyAsNumbers().reduce(add);
  },
};


