// ** doesn't do nicely with lots of comments in a method

/* opinionated & lazy formatting

  assumes double-spaced indentation
    but that's configurable in toString.indent
    and could be set as a configuration option in the iife

  function stringing is the worst
    it assumes you have a linter & prettier
    and that your linter/prettier does double-spaced indentation
    could use prettier.js, but that's fat for this purpose

*/

const { toString, toVariableString,
  studyInJsTutor, logJsTutorLink, jsTutorLink,
  parsonizerLink, studyInParsonizer } = (() => {

    const toString = (thing, depth) => {

      depth = depth === undefined
        ? 1
        : depth;

      let stringed;
      if (typeof thing === 'function') {
        stringed = toString.function(thing);

      } else if (thing.constructor.name === 'Array') {
        stringed = toString.array(thing, depth);

      } else if (thing.constructor.name === 'Object') {
        stringed = toString.object(thing, depth);

      } else if (typeof thing === 'string') {
        stringed = toString.string(thing);

      } else if (typeof thing === 'number') {
        stringed = toString.number(thing);

      } else if (typeof thing === 'boolean') {
        stringed = toString.boolean(thing);

      } else if (typeof thing === 'symbol') {
        stringed = toString.symbol(thing);

      } else if (thing === undefined) {
        stringed = toString.undefined(thing);

      } else if (thing === null) {
        stringed = toString.null(thing);

      } else {
        stringed = '"un-toString-able type"';
      }

      return stringed;
    }

    toString.indent = (depth) => {
      let indent = '';
      for (let i = 0; i < depth; i++) indent += '  ';
      return indent;
    }

    toString.object = (obj, depth) => {

      if (Object.keys(obj).length === 0) return '{}';

      depth = depth === undefined
        ? 1
        : depth;
      const indent = toString.indent(depth);

      const arrayToJoin = ['{\n'];
      for (let key in obj) {

        const descriptor = Object.getOwnPropertyDescriptor(obj, key);

        if (descriptor.hasOwnProperty('value')) {
          arrayToJoin.push(indent + key + ': ');
          arrayToJoin.push(toString(descriptor.value, depth + 1));
          arrayToJoin.push(',\n');
        }

        if (descriptor.set) {
          arrayToJoin.push(indent + toString(descriptor.set, depth + 1));
          arrayToJoin.push(',\n');
        }

        if (descriptor.get) {
          arrayToJoin.push(indent + toString(descriptor.get, depth + 1));
          arrayToJoin.push(',\n');
        }
      }
      arrayToJoin.push(toString.indent(depth - 1) + `}`);

      return arrayToJoin.join('');
    };

    toString.array = (arr, depth) => {

      if (arr.length === 0) return '[]';

      // depth = depth === undefined
      //   ? 1
      //   : depth;
      // const indent = toString.indent(depth);

      const arrayToJoin = ['['];
      for (let entry of arr) {
        // arrayToJoin.push(indent);
        arrayToJoin.push(toString(entry, depth + 1));
        arrayToJoin.push(', ');
        // entry.constructor.name === 'Object'
        //   ? arrayToJoin.push(',\n') // something depth related
        //   : arrayToJoin.push(', ');
      }
      arrayToJoin.pop();
      // arrayToJoin.push(toString.indent(depth - 1) + `]`);
      arrayToJoin.push(`]`);

      return arrayToJoin.join('');
    };

    toString.function = func => func.toString();

    toString.string = str => `"` + str + `"`;

    toString.boolean = String;

    toString.number = String;

    toString.symbol = String;

    toString.null = String;

    toString.undefined = String;

    Object.freeze(toString);

    const toVariableString = (value) => {
      const valueString = toString(value);
      const varName = typeof value === 'object' && value !== null
        ? value.constructor.name.toLowerCase(0)
        : typeof value === 'function'
          ? 'func'
          : (typeof value).substr(0, 3);
      const variabled = `const ${varName} = ${valueString};`;
      return variabled;
    }

    const jsTutorLink = (value) => {
      const snippet = toVariableString(value);
      const encoded = encodeURIComponent(snippet);
      const sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
      const deTabbed = sanitized.replace(/%09/g, '%20%20');

      const url = "http://www.pythontutor.com/live.html#code="
        + deTabbed
        + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";

      return url;
    }

    const logJsTutorLink = (value) => {
      console.groupCollapsed('JS Tutor link');
      {
        console.log(jsTutorLink(value));
      }
      console.groupEnd();
    };

    const studyInJsTutor = (value) => {
      const url = jsTutorLink(value);
      window.open(url, '_blank');
    }

    const parsonizerLink = (value) => {
      const snippet = toVariableString(value);
      const encoded = encodeURIComponent(snippet);
      const sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
      const deTabbed = sanitized.replace(/%09/g, '%20%20');

      const url = "https://janke-learning.github.io/parsonizer?snippet=" + deTabbed;

      return url;
    }


    const studyInParsonizer = (value) => {
      const url = parsonizerLink(value);
      window.open(url, '_blank');
    }
    return {
      toString,
      toVariableString,
      jsTutorLink,
      logJsTutorLink,
      studyInJsTutor,
      parsonizerLink,
      studyInParsonizer
    }
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
