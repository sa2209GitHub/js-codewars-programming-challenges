/**
 *      < 8 kuy >
 * 
 *      True for None?
 * 
 *      https://www.codewars.com/kata/545993ee52756d98ca0010e1
 */

const { none } = require('../solutions/8kuy_true_for_none')
const chai = require('chai')
const assert = chai.assert

describe('< 8 kuy > True for None', () => {
    it('Should pass the tests', () => {
        assert.strictEqual(none([1,2,3,4,5], function(item) { return item > 5 }), true)
        assert.strictEqual(none([1,2,3,4,5], function(item) { return item > 4 }), false)
    })
})
