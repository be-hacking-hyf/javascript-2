
## Week 3 Project



This project builds directly from last week's, so the tables below are pretty big but there actually less to build than last week!


---



### Core Object



> this table is written like documentation




| __it should ...__ | __syntax__ | __parameters__ | __return value__ | __description__ |
| --- | --- | --- | --- | --- |
| _... set the the current key_| ```obj.currentEntry = key;``` | _key_: a string | ```true``` if the key is valid, otherwise throws an error | this setter will save the ```key``` as the currentKey if it is a string, and if ```this.entries``` has that key.  otherwise it throws a helpful error |
| _... get the the current entry_| ```const entry = obj.currentEntry;``` | (none) | an object with one property: ```{key:value}```.  key is the currentKey, and value is the value in ```this.entries``` or a helpful error | this getter allows you to always have access to an up-to-date value for ```this.currentKey```.  If a user deletes that entry but doesn't reset the ```currentEntry```, no problem! |
| _... get an object with all the liked entries_| ```const likedEntries = obj.likedEntries``` | (none) | an Object with all liked entries | this getter will return an object with all the entries in ```this.entries``` matching the keys in ```this.likedKeys```.  If an entry has been removed, the return value will have a helpful error |
| _... like entries_| ```obj.likeEntry(key)``` | _key_: a string | ```true``` if the key is valid, otherwise returns an error | it will push the key into ```this.likedKeys``` if it is valid, otherwise returns an error |
| _... unlike entries_| ```obj.unlikeEntry(key)``` | _key_: a string | ```true``` if the key is valid and already liked, otherwise returns an error | if the key is valid, and is in ```this.likedEntries``` it will be removed from the array.  otherwise a helpful error is returned |
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



> this table is written as user stories. notice that users can't set or get the current entry!



| __As a/n__ ... | __I can__ ... | __so that__ ... |
| --- | --- | --- |
| _... user_ | ... remember which entries were most interesting | ... I can study more effectively over long periods of time |
| _... enthusiastic JS student_ | ... know what this site does and how to use it | ... I can use it to organize my favorite primitive values |
| _... enthusiastic JS student_ | ... set input new keys and primitive values | ... I can practice always being aware of what types _and_ values my application stores |
| _... enthusiastic JS student_ | ... select a method to call with my inputs | ... modify the values stored in this app, and search for particular entries |
| _... enthusiastic JS student_ | ... see the values stored in ```this.entries``` rendered to the DOM | ... I can easily know what is stored in the app without console.logging  |
| _... HYF coach_ | ... resize the browser window | ... I can test your responsive design |
| _... HYF coach_ | ... inspect the web page | ... I can see if you correctly used HTML5 semantic elements, CSS classes, and generally wrote clean code |
