import test from 'ava';
import m from '.';

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

test('finds requires', t => {
  const found = m(code);

  t.is(found.length, 3);

  t.is(found[0].module, 'insert-css');
  t.is(found[0].variable, 'insertCss');
  t.is(found[0].input, `const insertCss = require('insert-css');`);

  t.is(found[1].module, 'stylis');
  t.is(found[1].variable, 'stylis');
  t.is(found[1].input, `const stylis = require('stylis');`);

  t.is(found[2].module, 'assemble-template');
  t.is(found[2].variable, undefined);
  t.is(found[2].input, `require('assemble-template');`);

  t.is(m(`test`).length, 0);
});
