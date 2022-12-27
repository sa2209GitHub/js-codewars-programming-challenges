/**
 *      < 8 kuy >
 * 
 *      Subtract The Sum
 * 
 *      https://www.codewars.com/kata/56c5847f27be2c3db20009c3
 */

const { subtractTheSum,
        subtractTheSumWTF } = require('../solutions/8kuy_subtract_the_sum')
const { assert } = require('chai')

describe('< 8kuy > Subtract the Sum', () => {
    it('Should pass the tests', () => {
        assert.deepEqual(subtractTheSum(10), 'apple')
        assert.deepEqual(subtractTheSum(4353), 'apple')
        assert.deepEqual(subtractTheSum(8080), 'apple')
        assert.deepEqual(subtractTheSum(1215), 'apple')
        assert.deepEqual(subtractTheSum(5175), 'apple')
        assert.deepEqual(subtractTheSum(504), 'apple')
    })
    it('Should pass the tests to', () => {
        assert.deepEqual(subtractTheSumWTF(10), 'apple')
        assert.deepEqual(subtractTheSumWTF(4353), 'apple')
        assert.deepEqual(subtractTheSumWTF(8080), 'apple')
        assert.deepEqual(subtractTheSumWTF(1215), 'apple')
        assert.deepEqual(subtractTheSumWTF(5175), 'apple')
        assert.deepEqual(subtractTheSumWTF(504), 'apple')
    })
})