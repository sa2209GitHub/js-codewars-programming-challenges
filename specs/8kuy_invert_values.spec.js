/**
 *      < 8kuy >
 * 
 *      Invert Values
 * 
 *      https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
 */

const { invert } = require('../solutions/8kuy_invert_values')
const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('< 8kuy > Invert Values', () => {
    it('Should pass the tests', () => {
        assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])
        assert.deepEqual(invert([1,-2, 3, -4, 5]), [-1, 2,-3, 4, -5]);
        assert.deepEqual(invert([]), []);
        assert.deepEqual(invert([0]), [-0]);
    })  
})
