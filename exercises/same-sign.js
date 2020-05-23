'use strict';

/*
 * Create the `sameSign` function that takes 2 numbers as arguments and check
 * if they both have the same sign
 *
 * @notions Functions, If-Else
 */

// Your code:
const sameSign = (n1, n2) => n1 >0 && n2 >0 || n1 <0 && n2 <0 || n1 === n2 ? true : false 
// const sameSign = (nb1, nb2) => nb1 * -1 < 0 && nb2 * -1 < 0 || nb1 * -1 > 0 && nb2 * -1 > 0 || nb1 === nb2? true : false;

//* Begin of tests
const assert = require('assert') 

assert.strictEqual(typeof sameSign, 'function');
assert.strictEqual(sameSign.length, 2);
assert.notStrictEqual(sameSign, Math.sameSign);
assert.strictEqual(sameSign(-2, -1), true);
assert.strictEqual(sameSign(0, 0), true);
assert.strictEqual(sameSign(12, 3232), true);
assert.strictEqual(sameSign(1, -1), false);
assert.strictEqual(sameSign(-231, 1), false);
assert.strictEqual(sameSign(-231, 0), false);
assert.strictEqual(sameSign(0, 231), false);
assert.strictEqual(sameSign(231, -233), false);
// End of tests */
