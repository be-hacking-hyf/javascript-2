<h1 align="center">HackYourFuture Belgium</h1>

<div align="center">
  <a href="https://hackyourfuture.be" target="_blank">
    <img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="250" height="250"/>
  </a>
</div>

# JavaScript 2!

In JS 1 you learned to work on some pretty tricky problems by writing single functions that process user input.

In JS 2 you will learn about how to build simple websites by organizing your functions into objects that save and modify user data. In other words, Object Oriented Programming.


> check [the wiki](https://github.com/be-hacking-hyf/javascript-1/wiki) for supporting resources

---

### [Module Exercises](./module-exercises)

The exercises in this module are more challenging and more important than those in the _HTML, CSS & GitHub_.  Don't wait till the last week to start!

Something to keep in mind while you are working on these exercises is that it's ok to be confused by how to complete them at first. Learning how to work with the code in the exercises folder is just as important as passing the exercises themselves! Working back and forth between VSC and your browser's devtools to complete the exercises will help you master these important skills in a realistic setting:
* understanding the difference between source code and a live web page
* using the devtools to inspect and debug JS in the browser
* being comfortable managing multiple files and folders at once
* learning more than one way to think about, study and inspect the same lines of code.

So don't be discouraged if it's taking you a while to get comfortable completing this module's exercises, that's part of your learning!


__*The Different Types of Exercises:*__
All of your exercises will ask you to work with functions, but not all functions will be evaluated the same way. Some exercises will evaluate what's _inside_ the function using ```console.assert```, asking you to master how JS interprets your code.  Some exercises will only evaluate your functions using _test cases_, meaning they only care about what happens _outside_ your function (inputs & outputs).  Some will do both. :
* __Implementation__: When talking about code, the term __implementation__ refers to the actual lines of code written and what happens in memory as they are executed. These exercises will be assessed using ```console.assert``` (do your variables have the right values at the right times?). It's possible to write a function that _behaves_ correctly without understanding how you implemented it!  Mastering implementation means mastering how JS interprets your code and executes your program step-by-step.  You'll know you've mastered a feature of the JS language when you can confidently predict what [JS Tutor](http://www.pythontutor.com/live.html#code=&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false) will show _before_ you click the "forward" button.
* __Behavior__: In a sense __behavior__ is the mirror image of implementation, the behavior of code is all about what has changed in your program _after_ some lines of code have been executed regardless of how they made that change happen. For example if you're programming an online dictionary it will be very important that you have a function to organize words into alphabetical order (_behavior_), but it won't be very important to you if it uses a for loop, a while loop or an array method (_implementation_).  Behavior exercises will be assessed using ```test cases``` (given some arguments, does your function return the correct value).  You'll know you understand a function's behavior when you can rewrite it in pseudocodeor reconstruct it in the [Parsonizer](https://janke-learning.org/parsonizer/), and when you can write test cases that will all pass your funciton.
* __Mixed__: Some exercises will assess both _behavior_ and _implementation_ by having ```test cases``` and ```console.assert's```.  But there won't be too many of these so don't worry about them until you get there.
* __Testing Native Code__: Some of the exercises won't even ask you to write any functions!  To better understand how JavaScript works, a few of the exercises will ask you to write test cases for functions built into the JavaScript language.

> There is a suggested order to the exercises, which is the order they are included into the index.html file.  But you are not required to study them in this order.
> You'll know you've completed the exercises when all of the links in your browser are either black or green

---

### Weekly Projects

__How does JS connect to HTML & CSS?__

The projects in this module will introduce how to understand the relationship between JS & HTML/CSS, giving you a first step towards understanding what happens _behind_ the pretty web apps you use every day.  To help you get a start down this long road of understanding, you'll learn how to use [3-layer handlers](https://github.com/janke-learning/three-layer-handers) to connectJavaScript logic to your html/css web pages in a modular and organized.


You will need to complete:
1. The core JavaScript logic necessary to complete the weekly user stories.
1. The HTML & CSS user interface, for your JavaScript logic.


For each week's project you will be given:
* HTML with input fields, output fields, buttons & script tags. but nothing else!
* An empty CSS file
* JavaScript handler functions that already read and write from the DOM (you'll learn about the DOM in JS-2)
* Event listeners connecting your JavaScript to the buttons in your HTML (you'll also start learning about these in JS-2)



__Incremental Development 2.0:__ _git instead of folders_

Last module the projects emphasized breaking your web pages into small steps and using incremental development to reach a final webpage.  This module we will expect you to continue practicing incremental development, but will no longer ask you to have each step in a new folder.  For this module's projects you should begin using _git commits_ (and branches if you're feeling ambitious!) to split your projects into clearly labeled steps, the same way you used folders in the last module.  When we look through your repository's commit history we should see clearly labeled commits that store working but incomplete versions of the week's project.

For a more clear idea of what this will look like take some time to clone [Built With Branches](https://github.com/hackyourfuturebelgium/built-with-branches) and study it using GitKraken, VSC & running it in your browser.  What happens when you check out old commits/branches and open VSC or refresh your browser?



___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"/></a>

