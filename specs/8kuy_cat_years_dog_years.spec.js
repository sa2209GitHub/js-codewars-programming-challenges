/**
 *      < 8kuy >
 * 
 *      Cat Years, Dog Years
 * 
 *      https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
 */

const { humanYearsCatYearsDogYears,
        humanYearsCatYearsDogYearsSecond } = require('../solutions/8kuy_cat_years_dog_years')
const { assert } = require('chai')

describe('< 8kuy > Cat years, Dog years', () => {
    it('Should pass the tests', () => {
        assert.deepEqual(humanYearsCatYearsDogYears(1), [1, 15, 15])
        assert.deepEqual(humanYearsCatYearsDogYears(2), [2, 24, 24])
        assert.deepEqual(humanYearsCatYearsDogYears(10), [10, 56, 64])
        assert.deepEqual(humanYearsCatYearsDogYears(12), [12, 64, 74])
    })
    it('Should pass the tests to', () => {
        assert.deepEqual(humanYearsCatYearsDogYearsSecond(1), [1, 15, 15])
        assert.deepEqual(humanYearsCatYearsDogYearsSecond(2), [2, 24, 24])
        assert.deepEqual(humanYearsCatYearsDogYearsSecond(10), [10, 56, 64])
        assert.deepEqual(humanYearsCatYearsDogYearsSecond(12), [12, 64, 74])
    })
})