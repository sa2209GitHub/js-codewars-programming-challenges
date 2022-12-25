/**
 *      < 8kuy >
 * 
 *      Collatz Conjecture (3n+1)
 * 
 *      https://www.codewars.com/kata/577a6e90d48e51c55e000217
 */

const hotpo = n => {
    if (n === 0)
        return 0
    
    let count = 0

    while (n !== 1) {
        n = n % 2 === 0 ? n / 2 : 3 * n + 1
        count++
    }

    return count
}

module.exports = {
    hotpo
}