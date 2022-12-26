/**
 *      < 8kuy >
 * 
 *      Is It a Palindrome?
 * 
 *      https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
 */

const { isPalindrome } = require('../solutions/8kuy_is_it_a_palindrome')
const { assert } = require('chai')

describe("< 8kuy > Is It a Palindrome?", function() {
    it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
    it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
    it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
    it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
    it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
    it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
    it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
    it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
  });