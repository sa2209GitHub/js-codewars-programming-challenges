/**
 *      < 8kuy >
 * 
 *      Squaring an Argument
 * 
 *      https://www.codewars.com/kata/523b623152af8a30c6000027
 */

const { square } = require('../solutions/8kuy_squaring_an_argument')
const { assert } = require('chai')

describe('< 8kuy >  Squaring an Argument', () => {
    it('Should pass the tests', () => {
        assert.strictEqual(square(3), 9)
    })
})