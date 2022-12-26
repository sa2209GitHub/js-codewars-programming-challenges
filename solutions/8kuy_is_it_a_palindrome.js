/**
 *      < 8kuy >
 * 
 *      Is It a Palindrome?
 * 
 *      https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
 */

const isPalindrome = string => {
    if (string.length <= 1) return true

    for (let i = 0; i <= Math.floor(string.length / 2); i++)
        if (string[i].toLowerCase() !== string[string.length - 1 - i].toLowerCase())
            return false
    
    return true
}

module.exports = {
    isPalindrome
}