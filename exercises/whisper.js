'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = (babu) => {
    return '*' + babu.toLowerCase() + '*'
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.deepStrictEqual(whisper('today is a wonderfull day'), '*today is a wonderfull day*');
assert.deepStrictEqual(whisper('lowercase'), '*lowercase*');
assert.deepStrictEqual(whisper('AHLALA AURÉLIEN IL ME SOULE'), '*ahlala aurélien il me soule*');
// assert.fail('You must write your own tests');

// End of tests */
