## Week 1 Project

The weekly projects in JS 2 will be making an even stronger distinction between your core application and the user interface.   To help you with this transition there will be two assignment tables, one for the core app object and another for the user interface.

What you should notice and think about is that there is not a perfect 1-1 pairing between user stories (what is seen on the screen) and the core object (the software that makes the UI possible).  Some User Stories are all about the UI/UX and don't require any changes in the core object, while some methods in the core object have no direct representation in the UI.

---

### Core Object

> this table is written like documentation


| __it should ...__ | __syntax__ | __parameters__ | __return value__ | __description__ |
| --- | --- | --- | --- | --- |
| _... determine if values are numbery Strings_ | ```obj.isNumberyString(value)``` | _value_: any JS value | Boolean | It returns ```true``` if the argument is a string that does not cast to ```NaN```, otherwise it returns ```false```.
| _... save strings, sorted by NaNy-ness_ | ```obj.addString(value)``` | _value_: any JS value | a Boolean | If the value is a string it will be sorted by NaNy-ness and saved, then true will be returned.  If the value is not a string, it will not be saved and false will be returned |
| _... read all strings, sorted by NaNy-ness_ | ```obj.allStrings()``` |  (none) | Array of Strings | This method returns all of the saved strings, with the numbery ones first and the NaNy ones second |
| _... read all even, numbery strings_ | ```obj.evenStrings()``` |  (none) | Array of Strings | This method returns all of the saved strings that cast to even numbers |
| _... read all odd, numbery strings_ | ```obj.oddStrings()``` | (none)  | Array of Strings | This method returns all of the saved strings that cast to odd numbers |
| _... read all negative, numbery strings_ | ```obj.negativeStrings()``` |  (none) | Array of Strings  | This method returns all of the saved strings that cast to negative numbers |
| _... read all zero-y, numbery strings_ | ```obj.zeroStrings()``` |  (none) | Array of Strings  | This method returns all of the saved strings that cast to zero |
| _... return all numbery strings, as numbers_ | ```obj.numberyAsNumbers()``` |  (none) | Array of Numbers  | This method casts all saved, numbery strings to numbers and returns them in an array |
| _... return all NaNy strings, as numbers_ | ```obj.NaNyAsNumbers()``` |  (none) | Array of Numbers  | This method casts all saved, NaNy strings to numbers and returns them in an array |
| _... sum all numbery strings_ | ```obj.sumOfNumbery()``` | (none)  | a Number  | This method casts all saved, numbery strings to Numbers and adds them together |
| _... sum all NaNy strings_ | ```obj.sumOfNaNy()``` | (none)  | a Number  | This method converts all saved, NaNy strings to Numbers and adds them together |

---

### User Interface

> this table is written as user stories

| __As a/n__ ... | __I can__ ... | __so that__ ... |
| --- | --- | --- |
| _... enthusiastic JS student_ | ... know what this site does and how to use it | ... I can use it to learn more about Strings, Numbers, and NaNy values in JS |
| _... enthusiastic JS student_ | ... enter and save new string values | ... I can study the edge cases that I don't yet understand |
| _... enthusiastic JS student_ | ... view all saved strings, with the Numbery ones first and the NaNy ones second | ... the cloud of mystery around JS Strings and Numbers slowly begins to lift |
| _... enthusiastic JS student_ | ... select and a filtering option from a drop-down list and call it, seeing the result displayed below | ... I can practice predicting what will be displayed before clikcing "call it!" |
| _... HYF coach_ | ... resize the browser window | ... I can test your responsive design |
| _... HYF coach_ | ... inspect the web page | ... I can see if you correctly used HTML5 semantic elements, CSS classes, and generally wrote clean code |
