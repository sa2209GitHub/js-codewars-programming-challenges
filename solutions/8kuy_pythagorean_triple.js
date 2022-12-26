/**
 *      < 8 kuy >
 * 
 *      Pythagorean Triple
 * 
 *      https://www.codewars.com/kata/5951d30ce99cf2467e000013
 */

const isPythagoreanTriple = integers => {
    integers.sort((a, b) => a - b)
    const [ a, b, c ] = integers
    return c * c === a * a + b * b
}

module.exports = {
    isPythagoreanTriple
}