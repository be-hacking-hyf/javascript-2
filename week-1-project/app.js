const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    // write me!
    if (typeof param=== "string" && isNaN(param)=== false ){
      return true;
    }else{
      return false;
    }
  },
  addString: function (param) {
    if (typeof param !== 'string') return false; // write this early return condition
    else {
      if (isNaN(param)) {
        this.NaNyStrings.push(param);
      } else {
        this.numberyStrings.push(param);
      }
      return true;
    }
  
    // write me! (using this.isNumberyString)
  },
  allStrings: function () {
    // write me!
    if(  this.numberyStrings.length !== 0 && this.NaNyStrings.length === 0){
      return this.numberyStrings;
    }else if ( this.numberyStrings.length === 0  && this.NaNyStrings.length !== 0){
      return this.NaNyStrings;
    }else if(this.numberyStrings.lenght !== 0 && this.NaNyStrings.lenght !== 0){ 
 
     return this.numberyStrings.concat(this.NaNyStrings);

    }
  },
  evenStrings: function () {
    // write me!
   function notOddNumber(number){ 
   return number %2 === 0;
  }
  if(this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
    return this.numberyStrings;
 }else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0 ){
     return this.numberyStrings.filter(notOddNumber);// take the even numbers
  }else if(this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
   return this.numberyStrings.filter(notOddNumber);
  }
  
  },

  oddStrings: function () {
    // write me!
    function notEvenNumber(number){ 
      return number %2 !== 0;
     }
     if(this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
       return this.numberyStrings;
    }else if (this.NaNyStrings.length === 0 && this.numberyStrings.lenght !== 0) {
       return this.numberyStrings.filter(notEvenNumber);// take the odd numbers
     }else if(this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
       return this.numberyStrings.filter(notEvenNumber);
     }
  },

  negativeStrings: function () {
    // write me!
    function negatifNumbers(number){
      return number <0;
    }
    if(this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
      return this.numberyStrings;
    }else if( this.NaNyStrings.length === 0 ){ //&& this.numberyStrings.length !== 0
       return this.numberyStrings.filter(negatifNumbers);
    }else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0);
    return this.numberyStrings.filter(negatifNumbers);
  },


  positiveStrings: function () {
    // write me!
    function pozitifNumbers(number){
      return number > 0 || number === "";
    }
    if(this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
      return this.numberyStrings;
    }else if( this.NaNyStrings.length === 0 ){ //&& this.numberyStrings.length !== 0
       return this.numberyStrings.filter(pozitifNumbers);
    }else if( this.NaNyStrings.length !== 0 && this.numberyStrings.length!==0 ){
      return this.numberyStrings.filter(pozitifNumbers);
    }else if( this.NaNyStrings.length !== 0 && this.numberyStrings.length!==0){
      return this.numberyStrings.filter(pozitifNumbers);
    }
  },
  zeroStrings: function () {
    // write me!
    function zerro(number){
      return number ==0 || number =='';
    }
    if(this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
      return this.numberyStrings;
    }else if( this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      return this.numberyStrings.filter(number);
    }else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
      return this.numberyStrings.filter(number);
    }

  },
  numberyAsNumbers: function () {
    // write me!
   
  
  },
  NaNyAsNumbers: function () {
    // write me!
  },
  sumOfNumbery: function () {
    // write me!
    function sum(a,b) {
      return (a+b);
  
    }
  },
  sumOfNaNy: function () {
    // write me!
    return undefined;
  },
};

