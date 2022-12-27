/**
 *      < 7kuy >
 * 
 *      How Fast Can The Burglar Steal all The Diamonds?
 * 
 *      https://www.codewars.com/kata/63a15a3511e6e70023e7d0d3
 */

const { diamondBurglar } = require('../solutions/7kuy_how_fast_the_burglar_steal_all_the_diamonds')
const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('< 7kuy > How Fast Can The Burglar Steal all The Diamonds?', function () {
    it('Example 1', function () {
        assert.deepEqual(diamondBurglar(['*.*.*.*.*.', '...*..**..', '**.**...*.', '**..**..**']), 13);
    })
    it('Example 2', function () {
        assert.deepEqual(diamondBurglar(['..*.*.*...', '.**.*.*.**', '*........*']), 9);
    })
    it('Example 3', function () {
        assert.deepEqual(diamondBurglar(['..*....*..', '....*.....', '*...**....', '..**.....**', '..**..**.*', '.*.*.*.**.']), 14);
    })
    it('Example 4', function () {
        assert.deepEqual(diamondBurglar(['.*...*...*', '..***..*..', '...**.*...', '.***.**..*']), 12);
    })
    it('Example 5', function () {
        assert.deepEqual(diamondBurglar(['..****..*.', '..***.....', '.*..*...*.', '......**..']), 9);
    })
    it('Example 6', function () {
        assert.deepEqual(diamondBurglar([ '..........', '.....*****', '****.*****', '*****.....' ]), 11);
    })
})