/**
 *      < 8kuy >
 * 
 *      Sale of Hot Dogs
 * 
 *      https://www.codewars.com/kata/57202aefe8d6c514300001fd
 */

const { saleHotDogs } = require('../solutions/8kuy_sale_of_hot_dogs')
const { assert } = require('chai')

describe('< 8kuy > Sale of Hot Dogs', () => {
    it('Should pass the tests', () => {
        assert.strictEqual(saleHotDogs(  1),  100)
        assert.strictEqual(saleHotDogs(  4),  400)
        assert.strictEqual(saleHotDogs(  5),  475)
        assert.strictEqual(saleHotDogs(  9),  855)
        assert.strictEqual(saleHotDogs( 10),  900)
        assert.strictEqual(saleHotDogs(100), 9000)
    })
})
