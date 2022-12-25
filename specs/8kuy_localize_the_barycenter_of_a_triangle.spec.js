/**
 *      < 8kuy >
 * 
 *      Localize The Barycenter of a Triangle
 * 
 *      https://www.codewars.com/kata/5601c5f6ba804403c7000004
 */

const { barTriang } = require('../solutions/8kuy_localize_the_barycenter_of_a_triangle')
const { assert } = require('chai')

describe('< 8 kuy > Localize The Barycenter of a Triangle', () => {
    it('Should pass the tests', () => {
        assert.deepEqual(barTriang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]);
        assert.deepEqual(barTriang([4, 2], [12, 2], [6, 10]), [7.3333, 4.6667]);
        assert.deepEqual(barTriang([4, 8], [8, 2], [16, 6]), [9.3333, 5.3333]);
        assert.deepEqual(barTriang([0, 0], [1, 3], [-1, 6]), [0, 3]);
        assert.deepEqual(barTriang([0, 0], [1, 6], [8, -6]), [3, 0]);
    })
})