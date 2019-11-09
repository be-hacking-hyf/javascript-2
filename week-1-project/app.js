const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    // write me!
      
    if (typeof param !== 'string') {
        return false;
    }

        return !isNaN(param);
  },
  addString: function (param) {
    if (typeof param !== "string"){
        return false;
    }else if (isNaN(param)){
      this.NaNyStrings.push(param);
    }else if(!isNaN(param)){
      this.numberyStrings.push(param);
    }
        return true;
        
    
  },
  allStrings: function () {
    // write me!
    if (this.NaNyStrings.length===0){
        return this.numberyStrings;
    }else if(this.numberyStrings.length===0){
        return this.NaNyStrings;
    }
        return this.numberyStrings.concat(this.NaNyStrings);
  },
  evenStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0) { 
        return this.numberyStrings;
    }else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      function even(num){
        return (num % 2 === 0);
      }
        return this.numberyStrings.filter(even);
    }else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
      function even(num){
        return (num % 2 === 0);
      }
        return this.numberyStrings.filter(even);
    }
  },
  oddStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
        return this.numberyStrings;
    }else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      function odd(num){
        return (num%2 !== 0);
      }
        return this.numberyStrings.filter(odd);
    }else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
      function odd(num){
        return (num % 2 !== 0);
      }
        return this.numberyStrings.filter(odd);
    }
  },
  negativeStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
        return this.numberyStrings;
    }else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      function negative(num){
        return (num < 0);
      }
        return this.numberyStrings.filter(negative);
    }else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
      function negative(num){
        return (num < 0);
      }
        return this.numberyStrings.filter(negative);
    }
  },
  positiveStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
        return this.numberyStrings;
    }else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      function positive(num){
        return (num > 0);
      }
        return this.numberyStrings.filter(positive);
    }else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
      function positive(num){
        return (num > 0 || num === "");
      }
        return this.numberyStrings.filter(positive);
    }
  },
  zeroStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
        return this.numberyStrings;
    }else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      function zero(num){
        return (num == 0);
      }
        return this.numberyStrings.filter(zero);
    }else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
      function zero(num){
        return (num == 0);
      }
        return this.numberyStrings.filter(zero);
    }
  },
  numberyAsNumbers: function () {
    // write me!
    return this.numberyStrings.map(num => Number(num));

  },
  NaNyAsNumbers: function () {
    // write me!
    return this.NaNyStrings.map( num => Number(num)); 
  },
  sumOfNumbery: function () {
<<<<<<< HEAD
    // write me!
    const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
    return this.numberyStrings.reduce(reducer, 0);
=======
    // write me! (using a Array.prototype.reduce())
>>>>>>> upstream/master
  },
  sumOfNaNy: function () {
    // write me!
    return NaN;
  },
};


