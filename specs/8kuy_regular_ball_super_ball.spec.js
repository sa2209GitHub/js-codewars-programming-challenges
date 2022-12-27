/**
 *      < 8 kuy >
 * 
 *      Regular Ball. Super Ball
 * 
 *      https://www.codewars.com/kata/53f0f358b9cb376eca001079
 */

const { Ball } = require('../solutions/8kuy_regular_ball_super_ball')
const chai = require('chai')
const assert = chai.assert

describe('< 8kuy > Regular Ball. Super Ball', () => {
    it('Should pass the tests', () => {
        assert.equal(new Ball().ballType, 'regular')
        assert.equal(new Ball('super').ballType, 'super')
    })
})
