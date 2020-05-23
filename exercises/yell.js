
'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = (bubi) => {
    return bubi.toUpperCase()
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.deepStrictEqual(yell('today is a wonderfull day'), 'TODAY IS A WONDERFULL DAY');
assert.deepStrictEqual(yell('ahlala Aurélien il me soule'), 'AHLALA AURÉLIEN IL ME SOULE');
assert.deepStrictEqual(yell('UPPERCASE'), 'UPPERCASE');
assert.deepStrictEqual(yell('1'), '1');


// assert.fail('You must write your own tests');
// End of tests */