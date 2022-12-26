/**
 *      < 8kuy >
 * 
 *      Quarter of The Year
 * 
 *      https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
 */

const { quarterOf } = require('../solutions/8kuy_quarter_of_the_year')
const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('< 8 kuy >  Quarter of The Year', () => {
    it('Should pass the tests', () => {
        assert.strictEqual(quarterOf(3), 1)
        assert.strictEqual(quarterOf(5), 2)
        assert.strictEqual(quarterOf(8), 3)
        assert.strictEqual(quarterOf(11), 4)
    })
})