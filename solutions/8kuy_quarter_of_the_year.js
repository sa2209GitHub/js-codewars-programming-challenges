/**
 *      < 8kuy >
 * 
 *      Quarter of The Year
 * 
 *      https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
 */

const quarterOf = month => {
    return Math.ceil(month / 3)
}

module.exports = {
    quarterOf
}