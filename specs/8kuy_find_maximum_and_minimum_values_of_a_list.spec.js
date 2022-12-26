/**
 *      < 8kuy >
 * 
 *      Find Maximum and Minimum Values of a List
 * 
 *      https://www.codewars.com/kata/577a98a6ae28071780000989
 */

const { min, max } = require('../solutions/8kuy_find_maximum_and_minimum_values_of_a_list')
const chai = require('chai')
const assert = chai.assert

describe('< 8kuy > Find Maximum and Minimum Values of a List', () => {
    it('Should pass the tests', () => {
        assert.equal(min([-52, 56, 30, 29, -54, 0, -110]), -110);
        assert.equal(min([42, 54, 65, 87, 0]), 0);
        assert.equal(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
        assert.equal(max([5]), 5);
    }) 
})
