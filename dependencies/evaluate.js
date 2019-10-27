// hardcoded for Prism.  eventually todo: abstract the higlighting library

const evaluate = (() => {
  function evaluate(func, cases) {

    const errorLog = [];
    if (typeof func !== "function") {
      console.error("TypeError: first argument must be a function, received:", func);
      errorLog.push(new TypeError("first argument must be a function"));
    }
    if (!(cases instanceof Array) && arguments.length > 1) {
      console.error("TypeError: second argument must be an array, received:", cases);
      errorLog.push(new TypeError("second argument must be an array"));
    }
    if (errorLog.length !== 0) return errorLog;

    const isBehavior = cases ? true : false;

    const isNative = evaluate.isNativeFunction(func);

    const evaluationLog = isBehavior
      ? evaluate.assessBehavior(func, cases, isNative)
      : evaluate.assessImplementation(func, isNative)

    evaluationLog.isBehavior = isBehavior;
    evaluationLog.isNative = isNative;
    evaluationLog.coordinates = evaluate.fileLineColumn();
    evaluationLog.testCases = cases;

    evaluate.renderEvaluation(func, evaluationLog, isBehavior);

    document && document.body !== null
      ? evaluate.renderStudyLinks(func, evaluationLog)
      : null

    return evaluationLog;
  }

  evaluate.fileLineColumn = () => {
    const stackString = (new Error()).stack;
    const stackArray = stackString.split('\n');
    const baseCallPath = stackArray[stackArray.length - 1] === ''
      ? stackArray[stackArray.length - 2] // firefox
      : stackArray[stackArray.length - 1] // chrome, opera

    return baseCallPath;
  }


  evaluate.isNativeFunction = (arg) => {
    // https://davidwalsh.name/detect-native-function

    const toString = Object.prototype.toString;
    const fnToString = Function.prototype.toString;
    const reHostCtor = /^\[object .+?Constructor\]$/;
    const reNative = RegExp('^' +
      String(toString)
        .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
        .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    const argType = typeof arg;
    return argType == 'function'
      ? reNative.test(fnToString.call(arg))
      : (arg && argType == 'object' && reHostCtor.test(toString.call(arg))) || false;
  }

  evaluate.assessBehavior = (func, cases, isNative) => {

    const report = {
      name: func.name
    }
    isNative
      ? report.isNative = true
      : null

    if (cases.length === 0) {
      report.empty = true;
      report.status = 4;
      return report;
    }

    const testLogs = evaluate.assesTestCases(func, cases, isNative);

    report.status = !testLogs.every(entry => !entry.err)
      ? 0 // a test case threw an error
      : !testLogs.every(entry => entry.status !== 4)
        ? 4 // one or more test cases were invalid
        : testLogs.every(entry => entry.status === 2)
          ? 2 // all tests / asserts pass
          : 3 // one or more tests / asserts failed


    report.testLogs = testLogs;

    return report;
  }

  evaluate.assesTestCases = (func, cases, isNative) => {

    const testLogs = [];
    for (let testCase of cases) {

      const validationLog = evaluate.validateTestCase(testCase);
      if (validationLog !== null) {
        testLogs.push(validationLog);
        continue;
      }

      const behaviorLog = {};

      Object.assign(behaviorLog, testCase);

      const implementationLog = evaluate.assessImplementation(func, isNative, testCase.args);
      behaviorLog.implementation = implementationLog;

      if (implementationLog.err) {
        behaviorLog.err = implementationLog.err;
        behaviorLog.status = 0;
        testLogs.push(behaviorLog);
        continue;
      } else {
        behaviorLog.returned = implementationLog.returned
      }

      behaviorLog.pass = evaluate.compareValues(behaviorLog.returned, behaviorLog.expected);

      behaviorLog.status = behaviorLog.pass
        && (implementationLog.status === 1
          || implementationLog.status == 2)
        ? 2
        : 3

      testLogs.push(behaviorLog);
    }
    return testLogs
  }

  evaluate.validateTestCase = (testCase) => {
    const invalidReport = {};

    if (testCase.constructor.name !== "Object") {
      invalidReport.invalidTestCase = new TypeError("is not an Object");
      invalidReport.testCase = testCase;
      invalidReport.status = 4;
      return invalidReport;
    };

    if (!testCase.hasOwnProperty("name")) {
      invalidReport.name = new Error("does not exist");
    }
    else if (typeof testCase.name !== "string") {
      invalidReport.name = new TypeError("is not a string");
    }

    if (!testCase.hasOwnProperty("args")) {
      invalidReport.args = new Error("does not exist");
    }
    else if (!testCase.args || testCase.args.constructor.name !== "Array") {
      invalidReport.args = new TypeError("is not an Array");
    }

    if (!testCase.hasOwnProperty("expected")) {
      invalidReport.expected = new Error("does not exist");
    }

    if (Object.keys(invalidReport).length !== 0) {
      const testCaseCopy = Object.assign({}, testCase);
      const x = Object.assign(testCaseCopy, invalidReport);
      testCaseCopy.status = 4;
      return testCaseCopy;
    }

    return null;

  }

  evaluate.compareValues = (returned, expected) => {
    let areTheSame;
    if (typeof expected === 'object' && expected !== null) {
      areTheSame = evaluate.isEqualObjects(returned, expected);
    } else if (expected !== expected) {
      areTheSame = returned !== returned;
    } else {
      areTheSame = returned === expected;
    }
    return areTheSame;
  }

  evaluate.isEqualObjects = (value, other) => {
    // https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/

    var type = Object.prototype.toString.call(value);

    if (type !== Object.prototype.toString.call(other)) return false;

    if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

    var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
    var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;

    var compare = function (item1, item2) {

      var itemType = Object.prototype.toString.call(item1);

      if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
        if (!evaluate.isEqualObjects(item1, item2)) return false;
      }
      else {
        if (itemType !== Object.prototype.toString.call(item2)) return false;

        if (itemType === '[object Function]') {
          if (item1.toString() !== item2.toString()) return false;
        } else {
          if (item1 !== item1 && item2 !== item2) return true;
          if (item1 !== item2) return false;
        }
      }
    };

    if (type === '[object Array]') {
      for (var i = 0; i < valueLen; i++) {
        if (compare(value[i], other[i]) === false) return false;
      }
    } else {
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          if (compare(value[key], other[key]) === false) return false;
        }
      }
    }

    return true;

  };


  evaluate.assessImplementation = (func, isNative, args) => {

    args = args instanceof Array
      ? args
      : []

    const report = {
      name: func.name
    }

    isNative
      ? report.isNative = true
      : null

    const evaluation = evaluate.evaluate(func, isNative, args);

    report.status = evaluation.err
      ? 0 // there was an error
      : evaluation.asserts.length === 0
        ? 1 // no error or asserts
        : evaluation.asserts.every(entry => Boolean(entry.assertion))
          ? 2 // all asserts pass
          : 3 // at least one assert fails

    evaluation.asserts.length > 0
      ? report.asserts = evaluation.asserts
      : null

    evaluation.err
      ? report.err = evaluation.err
      : report.returned = evaluation.returned

    return report;
  }

  evaluate.evaluate = (func, isNative, args) => {
    const nativeConsole = console;
    console = evaluate.buildConsoleCatcher()

    const report = {
      asserts: console.asserts
    }

    if (func === evaluate) {
      try {
        report.returned = args instanceof Array
          ? evaluate(...args)
          : evaluate()
      } catch (error) {
        report.err = error;
      }
    } else {
      try {
        report.returned = args instanceof Array
          ? func(...args)
          : func()
      } catch (error) {
        report.err = error;
      }
    }

    console = nativeConsole;

    return report
  }


  evaluate.buildConsoleCatcher = () => {
    const consoleInterceptor = Object.create(console);
    consoleInterceptor.caught = {};

    consoleInterceptor.asserts = [];
    consoleInterceptor.assert = function (assertion) {
      const args = Array.from(arguments);
      args.shift();
      consoleInterceptor.asserts.push({
        assertion,
        messages: [...args]
      })
    }

    const consoleKeys = Object.keys(console);
    consoleKeys.forEach(key => {
      if (key === 'assert' || (typeof console[key] !== 'function')) {
      }
      else {
        consoleInterceptor[key] = () => { };
      }
    });

    return consoleInterceptor;
  }

  // console views
  evaluate.renderEvaluation = (func, log, isBehavior) => {

    const mainColor = log.status === 0
      ? "red" // function errored out
      : log.status === 1
        ? "black" // function had no asserts / test cases
        : log.status === 2
          ? "green" // function passed all of it's asserts / test cases
          : log.status === 3
            ? "orange" // function failed one or more asserts / test cases
            : "purple" // function had an invalid test case, status == 4


    const nativity = log.isNative
      ? ' (native)'
      : ''

    const exerciseType = isBehavior
      ? 'behavior'
      : 'implementation'

    console.groupCollapsed("%c" + log.name + nativity + ':', "color:" + mainColor, exerciseType);
    {
      evaluate.renderCoordinates(log);

      isBehavior
        ? evaluate.renderBehavior(func, log)
        : evaluate.renderImplementation(func, log);

    }
    console.groupEnd();
  }

  evaluate.renderCoordinates = (log) => {
    // console.log(log.coordinates);

    // https://stackoverflow.com/questions/25331030/js-get-second-to-last-index-of

    const baseCallLastSlash = log.coordinates.lastIndexOf('/') - 1;
    const baseCallPenultimateSlash = log.coordinates.lastIndexOf('/', baseCallLastSlash);
    const baseCallLocation = log.coordinates.substr(baseCallPenultimateSlash);
    console.groupCollapsed('%cevaluated @ ' + baseCallLocation, 'color:grey');
    {
      console.log(log.coordinates);
    }
    console.groupEnd();
  };

  evaluate.renderBehavior = (func, log) => {
    if (log.empty) {
      console.log('%cno test cases provided', 'color:purple');
      return
    }

    for (let entry of log.testLogs) {

      const testColor = entry.status === 0
        ? "red" // function errored out
        : entry.status === 2
          ? "green" // function passed all of it's asserts / test cases
          : entry.status === 3
            ? "orange" // function failed one or more asserts / test cases
            : "purple" // function had an invalid test case, status == 4

      if (entry.status === 4) {
        const invalidIndex = log.testLogs.indexOf(entry);
        console.groupCollapsed('%c[' + invalidIndex + '] is invalid', 'color:' + testColor);
        {
          const toRender = Object.assign({}, entry);
          delete toRender.status;
          console.log(toRender);
        }
        console.groupEnd();
      } else {
        console.groupCollapsed('%c' + entry.name, 'color:' + testColor);
        {
          evaluate.renderTestLog(func, entry, log)
        }
        console.groupEnd();
      }

    }

  }



  evaluate.renderTestLog = (func, entry) => {

    for (let i in entry.args) {
      const argType = evaluate.richType(entry.args[i]);
      console.log('%cargs[' + i + ']: ', 'font-weight: bold; color:blue', argType + ',', entry.args[i]);
    }

    evaluate.renderImplementation(func, entry);

    const expectedType = evaluate.richType(entry.expected);
    console.log("%cexpected: ", 'font-weight: bold; color:blue', expectedType + ",", entry.expected);

  }

  evaluate.richType = (thing) => {
    return thing !== null && typeof thing === 'object'
      // ? thing.constructor.name
      // : typeof thing
      ? (thing.constructor.name).substring(0, 3)
      : (typeof thing).substring(0, 3);
  };

  evaluate.renderImplementation = (func, log) => {

    evaluate.renderConsoleOutput(func, log.isNative, log.args);

    const asserts = log && log.asserts
      ? log.asserts
      : log && log.implementation && log.implementation.asserts
        ? log.implementation.asserts
        : null

    if (asserts) {
      const assertsColor = asserts.every(entry => entry.assertion)
        ? "green" // function passed all of it's asserts / test cases
        : "orange"
      log.isBehavior
        ? console.groupCollapsed("%c asserts:", "color:" + assertsColor)
        : console.group("%c asserts:", "color:" + assertsColor)
      {
        asserts.forEach(entry => {
          const color = entry.assertion
            ? "green"
            : "orange"
          const msg = entry.assertion
            ? "truthy:"
            : "falsey:"

          const assertion = entry.assertion,
            assType = evaluate.richType(assertion),
            messages = entry.messages;
          console.log('%c' + msg, 'color:' + color, '( ' + assType + ',', assertion, '), ', ...messages);
        });
      }
      console.groupEnd();
    }

    const returnedColor = log.pass === undefined // not a test case rendering
      ? 'black'
      : log.pass
        ? 'green'
        : 'orange'

    if (log.err) {
      console.log(`%c${log.err.name}:`, 'font-weight: bold; color: red', log.err.message);
    } else if (func.quizzing && log.pass === false) {
      console.log("%creturned: ", 'font-weight: bold; color:' + returnedColor, '--hidden--')
    } else {
      console.log("%creturned: ", 'font-weight: bold; color:' + returnedColor,
        // (typeof log.returned).substring(0, 3) + ',', log.returned)
        evaluate.richType(log.returned) + ',', log.returned
      );
    }

  }

  evaluate.renderConsoleOutput = (func, isNative, args) => {
    console.groupCollapsed(" console output:");
    {
      if (func === evaluate) {
        console.log('ô¿ô');
      }
      else {
        try {
          result = args instanceof Array
            ? func(...args)
            : func()
        } catch (err) {
          console.log(err);
        }
      }

    }
    console.groupEnd();
  };


  // dom views
  evaluate.renderStudyLinks = (func, log) => {

    const a = log.isNative
      ? evaluate.duckDuckSearchComponent(func, log)
      : evaluate.studyLinkComponent(func, log);

    const container = document.createElement('section');
    container.id = func.name;

    container.appendChild(
      func.display
        ? evaluate.renderSource(a, func, log)
        : a
    );

    if (log.isBehavior && log.testLogs) {
      for (let entry of log.testLogs) {
        if (entry.err) {
          container.appendChild(
            evaluate.errorSearchComponent(entry.name, entry.err)
          )
        }
      }
    } else {
      if (log.err) {
        container.appendChild(
          evaluate.errorSearchComponent(null, log.err)
        )
      }
    }

    document.body.appendChild(container);
    document.body.appendChild(document.createElement("hr"));
  }

  evaluate.renderSource = (aEl, func, log) => {
    const container = document.createElement('section');

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.appendChild(aEl);
    details.appendChild(summary);

    const finalCode = (() => {
      try {
        prettier.exists;
        const messyCode = log.testCases !== undefined
          // ? `const ${func.name}Tests = ` + log.testCases.toSource() + ';\n' + func.toString()
          ? func.toString()
          : func.toString();
        return prettier.format(
          messyCode,
          {
            parser: "babylon",
            plugins: prettierPlugins
          }
        )
      } catch (err) {
        try {
          // // toSource is not standard. .toString is not helpful
          // // not so important to rewrite toString
          // testsString = (() => {
          //   if (log.testCases === undefined) return '';

          //   const ogString = 'const testCases = ' + [{}, {}, {}].toSource();
          //   const firstBracketed = ogString.replace('[', '[\n  ');
          //   console.log(firstBracketed)
          //   const lastBracketed = firstBracketed.slice(0, firstBracketed.length - 1) + '\n];'
          //   console.log(lastBracketed)
          //   const newLined = lastBracketed.replace(new RegExp(/}, {/, 'g'), '},\n  {');
          //   console.log('nl', newLined)
          //   return newLined;
          // })()
          return func.toString();
        } catch (err) { };
      };
    })();

    try {
      Prism.exists;
      details.appendChild(
        evaluate.renderPrettyCode(
          finalCode
        )
      );
    } catch (err) {
      details.appendChild(
        evaluate.renderBoringCode(
          finalCode
        )
      );
    };
    container.appendChild(details);


    return container;
  }

  evaluate.prettify = (code) => {
    if (prettier !== undefined) {
      try {
        return prettier.format(
          appToString,
          {
            parser: "babylon",
            plugins: prettierPlugins
          }
        );
      } catch (err) {
        return code
      }
    } else {
      return code;
    }
  }

  evaluate.renderBoringCode = (code) => {
    const codeEl = document.createElement('code');
    codeEl.innerHTML = code;
    const pre = document.createElement('pre');
    pre.appendChild(codeEl);
    // pre.style = 'font-size:80%';
    return pre;
  }

  evaluate.renderPrettyCode = (code) => {
    const codeEl = document.createElement('code');
    codeEl.innerHTML = code;
    codeEl.className = "language-js";
    Prism.highlightAllUnder(codeEl);
    const pre = document.createElement('pre');
    pre.appendChild(codeEl);
    pre.style = 'font-size:80%';
    return pre;
  }

  evaluate.duckDuckSearchComponent = (func, log) => {

    const url = `https://duckduckgo.com/?q=javascript+mdn+${func.name}&atb=v185-2_d&ia=web`;

    const a = document.createElement('a');

    a.innerHTML = '<strong>' + func.name + ' (native)</strong>:  <i>DuckDuck Search</i > ';

    a.href = url;
    a.target = '_blank';
    a.style.color = log.status === 0
      ? "red"
      : log.status === 1
        ? "black"
        : log.status === 2
          ? "green"
          : log.status === 3
            ? "orange"
            : "purple"

    return a;

  }

  evaluate.studyLinkComponent = (func, log) => {

    const text = document.createElement('text');

    const nativity = log.isNative
      ? ' (native)'
      : ''

    text.innerHTML = '<strong>' + func.name + nativity + '</strong>:';

    text.style.color = log.status === 0
      ? "red"
      : log.status === 1
        ? "black"
        : log.status === 2
          ? "green"
          : log.status === 3
            ? "orange"
            : "purple"


    const parsonsSnippet = func.toString();

    const jsTutorSnippet = log.isBehavior
      ? parsonsSnippet
      : evaluate.commentTopBottom(parsonsSnippet);
    const encodedJST = encodeURIComponent(jsTutorSnippet);
    const sanitizedJST = encodedJST
      .replace(/\(/g, '%28').replace(/\)/g, '%29')
      .replace(/%09/g, '%20%20');
    const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
    // unuse live edit links to emphasize source vs. runtime?
    // "http://www.pythontutor.com/javascript.html#code=" + sanitizedJST + "&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D";

    const jsTutorLink = document.createElement('a');
    jsTutorLink.innerHTML = 'JS Tutor';
    jsTutorLink.href = jsTutorURL;
    jsTutorLink.target = '_blank';


    text.appendChild(evaluate.renderText('  '));
    text.appendChild(jsTutorLink);

    if (log.isBehavior) {
      const encodedPS = encodeURIComponent(parsonsSnippet);
      const sanitizedPS = encodedPS
        .replace(/\(/g, '%28').replace(/\)/g, '%29')
        .replace(/%09/g, '%20%20');
      const parsonsURL = "http://janke-learning.github.io/parsonizer/?snippet=" + sanitizedPS;
      const parsonsLink = document.createElement('a');
      parsonsLink.innerHTML = 'Parsonizer';
      parsonsLink.href = parsonsURL;
      parsonsLink.target = '_blank';

      text.appendChild(evaluate.renderText(',  '));
      text.appendChild(parsonsLink);
    }

    return text;

  };

  evaluate.renderText = (string) => {
    const htmled = string
      .replace(/\s/g, '&#x000A0;')
      .replace(/\t/g, '&#x00009;')
      .replace(/\n/g, '&#x0000A;');
    const text = document.createElement('text');
    text.innerHTML = htmled;
    return text;
  };

  evaluate.commentTopBottom = (str) => {
    const linesArray = str.split("\n");
    linesArray[0] = '// ' + linesArray[0];
    linesArray[linesArray.length - 1] = '// ' + linesArray[linesArray.length - 1];
    return linesArray.join("\n");
  }

  evaluate.errorSearchComponent = (name, err) => {

    const text = document.createElement('text');

    if (name) {
      const nameText = document.createElement('text');
      nameText.innerHTML = '(' + name + ') ';
      nameText.style.color = 'black';
      text.appendChild(nameText);
    }

    text.innerHTML += '<strong>' + err.name + '</strong>: ' + err.message;
    text.style.color = 'fireBrick';

    const duckDuckLink = document.createElement('a');
    duckDuckLink.innerHTML = 'DuckDuck Search';
    duckDuckLink.href = `https://duckduckgo.com/?q=javascript+mdn+${err.name}+${err.message}&atb=v185-2_d&ia=web`;
    duckDuckLink.target = '_blank';

    text.appendChild(evaluate.renderText(',  '));
    text.appendChild(duckDuckLink);

    const div = document.createElement('div');
    div.appendChild(text);
    div.style.marginTop = '5px';

    return div;
  }

  return Object.freeze(evaluate);
})()


/*
  Copyright 2019- janke-learning

  This program is free software: you can redistribute it and/or modify
  it under the terms of the Lesser GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/lgpl-3.0.html>.
*/
