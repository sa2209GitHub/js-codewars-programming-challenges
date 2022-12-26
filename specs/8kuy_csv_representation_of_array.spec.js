/**
 *      < 8kuy >
 * 
 *      CSV Representation of Array
 * 
 *      https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
 */

const { arrayToCsv } = require('../solutions/8kuy_csv_representation_of_array')
const { assert } = require('chai')

describe('< 8kuy > CSV Representation of Array', () => {
    it('Should pass the tests', () => {
        assert.strictEqual(arrayToCsv([
            [0, 1, 2, 3, 45],
            [10, 11, 12, 13, 14],
            [20, 21, 22, 23, 24],
            [30, 31, 32, 33, 34]
        ]), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');

        assert.strictEqual(arrayToCsv([
            [-25, 21, 2, -33, 48],
            [30, 31, -32, 33, -34]
        ]), '-25,21,2,-33,48\n30,31,-32,33,-34');

        assert.strictEqual(arrayToCsv([
            [5, 55, 5, 5, 55],
            [6, 6, 66, 23, 24],
            [666, 31, 66, 33, 7]
        ]), '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');

    })
})
