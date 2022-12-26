/**
 *      < 8 kuy >
 * 
 *      Count The Number of Cubes With Paint On
 * 
 *      https://www.codewars.com/kata/5763bb0af716cad8fb000580
 */

const countSquares = cuts => cuts ? (6 * cuts * cuts) + 2 : 1

module.exports = {
    countSquares
}