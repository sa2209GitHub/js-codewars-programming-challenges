/**
 *      < 8kuy >
 * 
 *      Grasshopper — Summation
 * 
 *      https://www.codewars.com/kata/55d24f55d7dd296eb9000030
 */

const { summation,
        summationSecond } = require('../solutions/8kuy_summation')
const assert = require('chai').assert

describe('< 8kuy > Grasshopper — Summation', () => {
    it('Should pass the tests', () => {
        assert.strictEqual(summation(1), 1)
        assert.strictEqual(summation(2), 3)
        assert.strictEqual(summation(8), 36)
    })
    it('Should pass the tests to', () => {
        assert.strictEqual(summationSecond(1), 1)
        assert.strictEqual(summationSecond(2), 3)
        assert.strictEqual(summationSecond(8), 36)
    })  
})
