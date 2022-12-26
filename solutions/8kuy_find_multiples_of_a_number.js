/**
 *      < 8kuy >
 * 
 *      Find Multiples of a Number
 * 
 *      https://www.codewars.com/kata/58ca658cc0d6401f2700045f
 */

const findMultiples = (int, lim) => {
    const multiples = []

    for (let i = int; i <= lim; i += int)
        multiples.push(i)

    return multiples
}

module.exports = {
    findMultiples
}