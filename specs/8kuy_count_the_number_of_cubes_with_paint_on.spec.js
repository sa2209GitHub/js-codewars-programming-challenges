/**
 *      < 8 kuy >
 * 
 *      Count The Number of Cubes With Paint On
 * 
 *      https://www.codewars.com/kata/5763bb0af716cad8fb000580
 */

const { countSquares } = require('../solutions/8kuy_count_the_number_of_cubes_with_paint_on')
const { assert } = require('chai')

describe('< 8kuy > Count The Number of Cubes With Paint On', () => {
    it('Should pass the tests', () => {
        assert.strictEqual(countSquares(0), 1)
        assert.strictEqual(countSquares(1), 8)
        assert.strictEqual(countSquares(2), 26)
        assert.strictEqual(countSquares(4), 98)
        assert.strictEqual(countSquares(5), 152)
        assert.strictEqual(countSquares(16), 1538)
        assert.strictEqual(countSquares(23), 3176)
    })
})
