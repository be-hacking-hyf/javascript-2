const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    return typeof param === 'string' && !isNaN(param);
  },
  addString: function (param) {
   if ( typeof param !== 'string') return false ;
    ; // write this early return condition

    if (this.isNumberyString(param) === true) {
      this.numberyStrings.push(param);
    } else  this.NaNyStrings.push(param);
    return true

      // write me! (using this.isNumberyString)
  },
  allStrings: function (param) {
    let arr = [...this.numberyStrings,...this.NaNyStrings];
    return arr;

    // write me!
  },
  evenStrings: function (param) {
    let arr = this.numberyStrings.filter(e => e%2===0);
    return arr;
    // write me!
  },
  oddStrings: function (param) {
    let arr = this.numberyStrings.filter(e => e%2!==0);
    return arr;
    // write me!
  },
  negativeStrings: function (param) {
    let arr = this.numberyStrings.filter(e => e<0);
    return arr;
    // write me!
  },
  positiveStrings: function (param) {
    let arr = this.numberyStrings.filter(e => e>=0);
    return arr;
    // write me!
  },
  zeroStrings: function (param) {
    let arr = this.numberyStrings.filter(e => e==0);
    return arr;
    // write me!
  },
  numberyAsNumbers: function (param) {
    let arr = this.numberyStrings.map(e => Number(e));
    return arr;
    // write me!
  },
  NaNyAsNumbers: function (param) {
    let arr = this.NaNyStrings.map(e => Number(e));
    return arr;
    // write me!
  },
  sumOfNumbery: function (param) {
   let sum = 0;
   for (i in this.numberyStrings) {
      sum += Number(this.numberyStrings[i]);
    }
   return sum;
       // write me!
  },
  sumOfNaNy: function (param) {
    return NaN;
    }
};


