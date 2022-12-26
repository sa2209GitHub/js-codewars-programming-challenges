/**
 *      < 8kuy >
 * 
 *      Find Multiples of a Number
 * 
 *      https://www.codewars.com/kata/58ca658cc0d6401f2700045f
 */

const { findMultiples } = require('../solutions/8kuy_find_multiples_of_a_number')
const { assert } = require('chai')

describe('< 8kuy > Find Multiples of a Number', () => {
    it('Should pass the tests', () => {
        assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
        assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
        assert.sameOrderedMembers(findMultiples(5, 7), [5])
        assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
        assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])        
    })
})
