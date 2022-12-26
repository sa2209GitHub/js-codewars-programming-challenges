/**
 *      < 8 kuy >
 * 
 *      Pythagorean Triple
 * 
 *      https://www.codewars.com/kata/5951d30ce99cf2467e000013
 */

const { isPythagoreanTriple } = require('../solutions/8kuy_pythagorean_triple')
const chai = require('chai')
const assert = chai.assert

describe('< 8kuy > Pythagorean Triple', () => {
    it('Should pass the tests', () => {
        assert.strictEqual(isPythagoreanTriple([3, 4, 5]), true);
        assert.strictEqual(isPythagoreanTriple([3, 5, 9]), false);
        assert.strictEqual(isPythagoreanTriple([72, 78, 30]), true);
    })  
})
