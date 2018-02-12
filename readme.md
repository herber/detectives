# detectives [![Build Status](https://travis-ci.org/herber/detectives.svg?branch=master)](https://travis-ci.org/herber/detectives) [![codecov](https://codecov.io/gh/herber/detectives/badge.svg?branch=master)](https://codecov.io/gh/herber/detectives?branch=master)

Find require statements in a string using regex

Works in node and in the browser

## Install

```
$ npm install detectives
```

## Usage

```js
const detectives = require('detectives');

const code = `
const insertCss = require('insert-css');
const stylis = require('stylis');

const insert = styles => {
  require('assemble-template');

  if (typeof window == 'object') {
    const styleElement = insertCss(styles);
    styleElement.setAttribute('class', 'vxv_style');
  }
};
`;

detectives(code);
// => [
//     {
//       module: 'insert-css',
//       variable: 'insertCss',
//       input: "const insertCss = require('insert-css');"
//     },
//     {
//       module: 'stylis',
//       variable: 'stylis',
//       input: "const stylis = require('stylis');"
//     },
//     {
//       module: 'assemble-template',
//       variable: undefined,
//       input: "require('assemble-template');"
//     }
//   ]
```

## API

### detectives(input)

#### input

Type: `string`

The javascript code you want to find requires in

## About

#### Why does `detectives` use regexp?

Parsing the code and analyzing the generated ast would work way better,
but it requires a lot of code, which means you would have
huge bundle sizes and it would probably not work in the browser,
since most js parsers are built for node.

`detectives` uses regexp, so it is really fast while being very small.

## License

MIT © [Tobias Herber](http://tobihrbr.com)
