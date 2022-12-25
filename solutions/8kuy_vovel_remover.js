/**
 *      < 8kuy >
 * 
 *      Vovel Remover
 * 
 *      https://www.codewars.com/kata/5547929140907378f9000039
 */

const removeVovels = (string) => {
    return string.replace(/[aeiou]/ig, '')
}

module.exports = {
    removeVovels
}