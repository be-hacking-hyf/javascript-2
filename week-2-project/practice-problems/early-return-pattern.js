{
  const pageTitle = 'early return pattern';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {


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

  ];
  function earlyReturn1(a, b) {
    // write me!
  }
  evaluate(earlyReturn1, earlyReturn1Tests);


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

