{
  const pageTitle = 'early return pattern';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {


  /* What's the early return pattern all about?

    This is a simple trick you can learn that will help A LOT to simplify your logic

    In the last module you had some challenges with many conditions,
    and it became tricky to keep track of all of them with if/else/else if ...

    What if you could avoid all of that by getting the easy stuff out of the way first?

    That's the idea with the 'early return' pattern

    return a result as soon as you can!
    - did the use pass in the wrong type? return!
    - is a string too short? return!

    This design pattern can also be very helpful for other developers using your code
    If you return a helpful message (true/false, 'wrong type!', 'too short'),
      they will have an easier time understanding what went wrong

  */

  function example_whatIsEarlyReturn() {
    // the early return pattern is what it sounds like,
    //  return early!

    // do a few checks at the top of your function
    //  if everything is ok, keep going!
    //  else, don't keep going! and let the user know what was wrong

    function onlyAdddNumbers(a, b) {
      if (typeof a !== 'number' && typeof b !== 'number') {
        return 'a and b are not numbers';
      }
      if (typeof a !== 'number') return 'a is not a number';
      if (typeof b !== 'number') return 'b is not a number';

      return a + b;
    }
    const sum1 = onlyAdddNumbers(0, 1);
    const sum2 = onlyAdddNumbers('0', 1);
    const sum3 = onlyAdddNumbers(0, '1');
    const sum4 = onlyAdddNumbers('0', '1');

  }
  evaluate(example_whatIsEarlyReturn);

  function example_whyUseEarlyReturn() {
    // because they make your code more understandable!
    // for you writing it:
    //  returning early means you don't need to worry about wrong types in your logic
    // for others reading it:
    //  nested code is more challenging to understand than flat code

    function onlyAdddNumbers(a, b) {
      let result;
      if (typeof a === 'number') {
        if (typeof b === 'number') {
          result = a + b;
        } else {
          result = 'b is not a number';
        }
      } else {
        if (typeof b === 'number') {
          result = 'a is not a number';
        } else {
          result = 'a and b are not numbers';
        }
      }
      return result;
    }
    const sum1 = onlyAdddNumbers(0, 1);
    const sum2 = onlyAdddNumbers('0', 1);
    const sum3 = onlyAdddNumbers(0, '1');
    const sum4 = onlyAdddNumbers('0', '1');
  }
  evaluate(example_whyUseEarlyReturn);

  const earlyReturn1Tests = [
    { name: 'first', args: ['', ''], expected: 'string' },
    { name: 'second', args: [false, ''], expected: 'hi!' },
    { name: 'third', args: [false, true], expected: 'boolean' },
    { name: 'fourth', args: ['hi!', true], expected: 'string' },
    { name: 'fifth', args: [2, 3], expected: 'hi!' },
  ];
  function earlyReturn1(a, b) {
    if (null) return 'string'; // replace null with your logic!
    console.assert(typeof a !== 'string', 'if a is a string, this assert should not be reached');

    if (null) return 'boolean'; // replace null with your logic!
    console.assert(typeof b !== 'boolean', 'if b is a boolean, this assert should not be reached');

    return 'hi!';
  }
  earlyReturn1.display = true;
  evaluate(earlyReturn1, earlyReturn1Tests);


  const earlyReturn2Tests = [
    { name: 'first', args: [4], expected: 'param must be an array' },
    { name: 'second', args: [{}], expected: 'param must be an array' },
    { name: 'third', args: [() => { }], expected: 'param must be an array' },
    { name: 'fourth', args: [[3, '3']], expected: '33' },
    { name: 'fifth', args: [[3, 3]], expected: 6 },
    { name: 'sixth', args: [], expected: 'param must be an array' },
  ];
  function earlyReturn2(param) {
    if (null) return 'param must be an array'; // replace null with your logic!

    return param.reduce((acc, item) => acc + item);
  }
  earlyReturn2.display = true;
  evaluate(earlyReturn2, earlyReturn2Tests);



  const earlyReturn3Tests = [
    { name: 'first', args: [4, '4'], expected: 'a is not a string' },
    { name: 'second', args: ['4', 4], expected: 'b is not a string' },
    { name: 'third', args: [4, 4], expected: 'a & b are not strings' },
    { name: 'fourth', args: [true, '3'], expected: 'a is not a string' },
    { name: 'fifth', args: ['hi', '!'], expected: 'hi!' },
    { name: 'sixth', args: ['by', 'e!'], expected: 'bye!' },
  ];
  function earlyReturn3(a, b) {
    if (null) return 'a & b are not strings'; // replace null with your logic!
    if (null) return 'a is not a string'; // replace null with your logic!
    if (null) return 'b is not a string'; // replace null with your logic!

    console.assert(typeof a === 'string', 'a should be a string');
    console.assert(typeof b === 'string', 'b should be a string');

    return a + b;
  }
  earlyReturn3.display = true;
  evaluate(earlyReturn3, earlyReturn3Tests);



  const earlyReturn4Tests = [
    { name: 'first', args: [x => x ? 'hi!' : 'bye!', true], expected: 'hi!' },
    { name: 'second', args: [x => x ? 'hi!' : 'bye!', false], expected: 'bye!' },
    { name: 'third', args: [x => x ? 'x is true' : 'x is false', false], expected: 'x is false' },
    { name: 'fourth', args: [x => x ? 'x is true' : 'x is false', true], expected: 'x is true' },
    { name: 'fifth', args: [4, false], expected: 'func must be a function' },
    { name: 'sixth', args: [() => { }, '3'], expected: 'argForFunc must be a boolean' },
    { name: 'seventh', args: [() => { }], expected: 'argForFunc must be a boolean' },
  ];
  function earlyReturn4(func, argForFunc) {
    if (null) return 'func must be a function'; // replace null with your logic!
    if (null) return 'argForFunc must be a boolean'; // replace null with your logic!

    console.assert(typeof func === 'function', 'func should be a function');
    console.assert(typeof argForFunc === 'boolean', 'argForFunc should be a boolean');

    return func(argForFunc);
  }
  earlyReturn4.display = true;
  evaluate(earlyReturn4, earlyReturn4Tests);


  {
    const learnMoreAbout = 'want to learn more about the early return pattern?';
    const wantToLearnMore = document.createElement('text');
    wantToLearnMore.innerHTML = learnMoreAbout;
    document.body.appendChild(wantToLearnMore);
    document.body.appendChild(document.createElement('br'));

    function renderLink(message, url) {
      const a = document.createElement('a');
      a.innerHTML = message;
      a.href = url;
      a.target = '_blank';
      return a;
    }


    const wilsonpageLink = renderLink(
      "early return by example",
      "http://wilsonpage.co.uk/return-early/",
    );
    document.body.appendChild(wilsonpageLink);
    document.body.appendChild(document.createElement('br'));

    const FCCLink = renderLink(
      'FreeCodeCamp early return challenge',
      "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions/",
    );
    document.body.appendChild(FCCLink);
    document.body.appendChild(document.createElement('br'));

    const redditLink = renderLink(
      "a reddit discussion about early returns",
      "https://www.reddit.com/r/javascript/comments/2rit4r/early_return_statements_in_functions/",
    );
    document.body.appendChild(redditLink);
    document.body.appendChild(document.createElement('br'));

    const timoxley = renderLink(
      "Tim likes early return",
      "https://blog.timoxley.com/post/47041269194/avoid-else-return-early",
    );
    document.body.appendChild(timoxley);
    document.body.appendChild(document.createElement('br'));


    const jenniferLink = renderLink(
      "but Jennifer doesn't",
      "https://dev.to/jenniferlynparsons/early-returns-in-javascript-5hfb",
    );
    document.body.appendChild(jenniferLink);
    document.body.appendChild(document.createElement('br'));


    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('hr'));
  }


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

