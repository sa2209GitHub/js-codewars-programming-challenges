/**
 *      < 8kuy >
 * 
 *      Vovel Remover
 * 
 *      https://www.codewars.com/kata/5547929140907378f9000039
 */

const { removeVovels }= require('../solutions/8kuy_vovel_remover')
const strictEqual = require('chai').assert.strictEqual

function doTest (input, expected) {
    const actual = removeVovels(input);
    strictEqual(actual, expected, `for "${input}":\n`);
  }

describe('< 8kuy > Vovels Remover', () => {
    it('Should pass the tests', () => {
        doTest('hello', 'hll');
        doTest('how are you today?', 'hw r y tdy?');
        doTest('complain', 'cmpln');
        doTest('never', 'nvr');
    })
})