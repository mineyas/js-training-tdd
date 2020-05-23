'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst =(str) => {
    return str.slice(2)
}

const cutLast =(bii) => {
    return bii.slice(0, -2)
}
const cutFirstLast =(houhi) => {
    return houhi.slice(2, -2)
}

//* Begin of tests
const assert = require('assert');
assert.deepStrictEqual(typeof cutFirst, 'function')
assert.deepStrictEqual(typeof cutLast, 'function')
assert.deepStrictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutFirstLast.length, 1);
assert.deepStrictEqual(cutFirst('hello'), 'llo')
assert.deepStrictEqual(cutLast('hello'), 'hel')
assert.deepStrictEqual(cutFirstLast('holahello'), 'lahel')






// assert.fail('You must write your own tests');
// End of tests */
