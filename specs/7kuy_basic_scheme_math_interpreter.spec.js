/**
 *      < 7kuy >
 * 
 *      Basic Scheme Math Interpreter
 * 
 *      https://www.codewars.com/kata/5c1ecee170fee65c8f00049b
 */

const { scheme } = require('../solutions/7kuy_basic_scheme_math_interpreter')
const { assert } = require('chai')

describe('< 7kuy > Basic Scheme Math Interpreter', () => {
    it('Should add arguments', () => {
        assert.strictEqual(scheme('(+)'), 0);
        assert.strictEqual(scheme('(+ 3 4)'), 7);
    });

    it('Should subtract arguments', () => {
        assert.strictEqual(scheme('(-)'), 0);
        assert.strictEqual(scheme('(- 3 4)'), -1);
    });

    it('Should multiply arguments', () => {
        assert.strictEqual(scheme('(*)'), 1);
        assert.strictEqual(scheme('(* 3 4)'), 12);
    });

    it('Should divide arguments', () => {
        assert.strictEqual(scheme('(/ 3 4)'), 0.75);
    });
});