/**
 *      < 8kuy >
 * 
 *      Collatz Conjecture (3n+1)
 * 
 *      https://www.codewars.com/kata/577a6e90d48e51c55e000217
 */

const { hotpo }= require('../solutions/8kuy_collatz_conjecture')
const strictEqual = require('chai').assert.strictEqual

function doTest (input, expected) {
    const actual = hotpo(input);
    strictEqual(actual, expected, `for "${input}":\n`);
  }

describe('< 8kuy > Collatz Conjecture (3n+1)', () => {
    it('Should pass the tests', () => {
        doTest(0, 0)
        doTest(1, 0)
        doTest(5, 5)
        doTest(6, 8)
        doTest(23, 15)
    })
})