/**
 *      < 7kuy >
 * 
 *      You Complete Me
 * 
 *      https://www.codewars.com/kata/63967eb85e54bd00237d2201
 */

const { complete } = require('../solutions/7kuy_you_complete_me')
const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('< 7kuy > You Complete Me', function () {
    it('Given Baa', function () {
        assert.strictEqual(complete('Baa'), 'BaaB');
    })
    it('Given aaB', function () {
        assert.strictEqual(complete('aaB'), 'aaBaa');
    })
    it('Given x', function () {
        assert.strictEqual(complete('x'), 'xx');
    })
    it('Given aaBB', function () {
        assert.strictEqual(complete('aaBB'), 'aaBBaa');
    })
    it('Given aOOa', function () {
        assert.strictEqual(complete('aOOa'), 'aOOaOOa');
    })
    it('Given xyz', function () {
        assert.strictEqual(complete('xyz'), 'xyzyx');
    })
    it('Given AaaaA', function () {
        assert.strictEqual(complete('AaaaA'), 'AaaaAaaaA');
    })
    it('Given abab', function () {
        assert.strictEqual(complete('abab'), 'ababa');
    })
})