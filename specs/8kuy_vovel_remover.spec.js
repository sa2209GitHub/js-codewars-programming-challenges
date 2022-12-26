/**
 *      < 8kuy >
 * 
 *      Vovel Remover
 * 
 *      https://www.codewars.com/kata/5547929140907378f9000039
 */

const { removeVovels,
        removeVowelsSecond }= require('../solutions/8kuy_vovel_remover')
const strictEqual = require('chai').assert.strictEqual

function doTest (input, expected) {
    strictEqual(input, expected, `for "${input}":\n`);
  }

describe('< 8kuy > Vovels Remover', () => {
    it('Should pass the tests', () => {
        doTest(removeVovels('hello'), 'hll')
        doTest(removeVovels('how are you today?'), 'hw r y tdy?')
        doTest(removeVovels('complain'), 'cmpln')
        doTest(removeVovels('never'), 'nvr')
    })
    it('Should pass the tests to', () => {
        doTest(removeVowelsSecond('hello'), 'hll')
        doTest(removeVowelsSecond('how are you today?'), 'hw r y tdy?')
        doTest(removeVowelsSecond('complain'), 'cmpln')
        doTest(removeVowelsSecond('never'), 'nvr')
    })
})