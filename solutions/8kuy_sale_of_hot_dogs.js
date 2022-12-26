/**
 *      < 8kuy >
 * 
 *      Sale of Hot Dogs
 * 
 *      https://www.codewars.com/kata/57202aefe8d6c514300001fd
 */

const saleHotDogs = n => n * (n < 5 ? 100 : n < 10 ? 95 : 90)

module.exports = {
    saleHotDogs
}