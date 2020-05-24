'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
// const jadenCase = (bobo) => {
//     return bobo.split(' ').map(e => e[0].toUpperCase() + e.substr(1).toLowerCase())
// }
function jadenCase(bobo) {
    const boboOk = bobo.split(' ')

    const boboPasOk = boboOk.map(e => e[0].toUpperCase() + e.slice(1).toLowerCase())

    return boboPasOk.join(' ')
}


// function capitalize_Words(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }



//* Begin of tests
const assert = require('assert');


assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase('hello my name is yas'), 'Hello My Name Is Yas');
assert.strictEqual(jadenCase('qsdqsdqsd'), 'Qsdqsdqsd');
assert.strictEqual(jadenCase('you stoopid'), 'You Stoopid');
assert.strictEqual(jadenCase('zapZAP'), 'Zapzap');


// assert.fail('You must write your own tests');
// End of tests */
