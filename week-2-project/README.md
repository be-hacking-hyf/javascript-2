
## Week 2 Project



The weekly projects in JS 2 will be making an even stronger distinction between your core application and the user interface. To help you with this transition there will be two assignment tables, one for the core app object and another for the user interface.



What you should notice and think about is that there is not a perfect 1-1 pairing between user stories (what is seen on the screen) and the core object (the software that makes the UI possible). Some User Stories are all about the UI/UX and don't require any changes in the core object, while some methods in the core object have no direct representation in the UI.



---



### Core Object



> this table is written like documentation




| __it should ...__ | __syntax__ | __parameters__ | __return value__ | __description__ |
| --- | --- | --- | --- | --- |
| _... determines if values are primitive or not_ | ```obj.isPrimitive(value)``` | _value_: any JS value | Boolean | It returns ```true``` if the argument is a primitive, otherwise it returns ```false```. |
| _... determines if an object has a given key_ | ```obj.hasKey(obj, key)``` | _obj_: an object <br>  _key_: a string | Boolean | It returns ```true``` if the object has the given key, otherwise it returns ```false```. |
| _... determines if an object has a given value_ | ```obj.hasValue(obj, value)``` | _obj_: an object <br>  _value_: any JS type | Boolean | It returns ```true``` if any key in the object stores this value, otherwise it returns ```false```. |
| _... adds key/value pairs to ```this.entries```_ | ```obj.addEntry(key, value)``` | _key_: a string <br>  _value_: any primitive value | ```true``` or an error | It returns ```true``` if the key/value pair was successfully added, otherwise it returns helpful error describing what went wrong. |
| _... removes a key/value pair from ```this.entries```_ | ```obj.removeEntry(key)``` | _key_: a string | ```true``` or an error | It returns ```true``` if the key/value pair was successfully removed, otherwise it returns helpful error describing what went wrong. |
| _... updates a key/value pair in ```this.entries```_ | ```obj.updateEntry(key, value)``` | _key_: a string <br>  _value_: any primitive type | ```true``` or an error | It returns ```true``` if the key/value pair was successfully updated, otherwise it returns helpful error describing what went wrong. |
| _... returns all key/value pairs in ```this.entries```_ | ```obj.readAll()``` | (no parameters) | an object | a new object with the same key/value pairs as ```this.entries``` |
| _... finds an entry by key_ | ```obj.findByKey(key)``` | _key_: a string | an object or an error | It returns an object with the given key, and it's value in ```this.entries```. Or a helpful error |
| _... finds an entry by value | ```obj.findByValue(value)``` | _value_: a primitive | an object or an error | It returns an object with all key/value pairs in ```this.entries``` containing the given value. Or a helpful error |



---



### User Interface



> this table is written as user stories



| __As a/n__ ... | __I can__ ... | __so that__ ... |
| --- | --- | --- |
| _... enthusiastic JS student_ | ... know what this site does and how to use it | ... I can use it to organize my favorite primitive values |
| _... enthusiastic JS student_ | ... set input new keys and primitive values | ... I can practice always being aware of what types _and_ values my application stores |
| _... enthusiastic JS student_ | ... select a method to call with my inputs | ... modify the values stored in this app, and search for particular entries |
| _... enthusiastic JS student_ | ... see the values stored in ```this.entries``` rendered to the DOM | ... I can easily know what is stored in the app without console.logging  |
| _... HYF coach_ | ... resize the browser window | ... I can test your responsive design |
| _... HYF coach_ | ... inspect the web page | ... I can see if you correctly used HTML5 semantic elements, CSS classes, and generally wrote clean code |
