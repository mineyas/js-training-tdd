'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (boo) => {
    return boo.slice(0, 2)
}
const keepLast = (yassaoule) => {
    return yassaoule.slice(-2, yassaoule.length )
}
const keepFirstLast = (auresoule) => {
    return auresoule.slice(2, 4)
}
//* Begin of tests
const assert = require('assert');



assert.deepStrictEqual(typeof keepFirst, 'function')
assert.deepStrictEqual(typeof keepLast, 'function')
assert.deepStrictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepFirstLast.length, 1);
assert.deepStrictEqual(keepFirst('hello'), 'he')
assert.deepStrictEqual(keepLast('hello'), 'lo')
assert.deepStrictEqual(keepFirstLast('holahello'), 'la')

// assert.fail('You must write your own tests');
// End of tests */
