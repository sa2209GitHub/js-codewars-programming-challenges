/**
 *      < 8kuy >
 * 
 *      Remove Exclanation Marks
 * 
 *      https://www.codewars.com/kata/57a0885cbb9944e24c00008e
 */

const { removeExclamationMarks } = require('../solutions/8kuy_remove_exclamation_marks')
const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('< 8kuy > Remove Exclanation Marks', () => {
    it('Should pass the tests', () => {
        assert.strictEqual(removeExclamationMarks('Hello, World!'), 'Hello, World')
    })  
})
