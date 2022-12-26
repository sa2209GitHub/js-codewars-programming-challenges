/**
 *      < 8kuy >
 * 
 *      altERnaTIng cAsE <=> ALTerNAtiNG CaSe
 * 
 *      https://www.codewars.com/kata/56efc695740d30f963000557
 */

const toAlternatingCase = require('../solutions/8kuy_alternating_case')
const { assert } = require('chai')

describe('< 8kuy > altERnaTIng cAsE <=> ALTerNAtiNG CaSe', () => {
    it('Should pass the tests', () => {
        assert.strictEqual("hello world".toAlternatingCase(), "HELLO WORLD");
        assert.strictEqual("HELLO WORLD".toAlternatingCase(), "hello world");
        assert.strictEqual("hello WORLD".toAlternatingCase(), "HELLO world");
        assert.strictEqual("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
        assert.strictEqual("12345".toAlternatingCase(), "12345");
        assert.strictEqual("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
        assert.strictEqual("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
        assert.strictEqual("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
    })
})