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

const removeVowelsSecond = string => {
    const vovels = 'aeiouAEIOU'
    let result = ''

    for (let i = 0; i < string.length; i++) {
        result += !vovels.includes(string[i]) ? string[i] : ''
    }

    return result
}

module.exports = {
    removeVovels,
    removeVowelsSecond
}