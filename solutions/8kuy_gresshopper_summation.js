/**
 *      < 8kuy >
 * 
 *      Grasshopper — Summation
 * 
 *      https://www.codewars.com/kata/55d24f55d7dd296eb9000030
 */

const summation = num => {
    let result = 0

    for (let i = 1; i <= num; i++) {
        result += i       
    }

    return result
}

const summationSecond = n => n * (n + 1) / 2

module.exports = {
    summation,
    summationSecond
}