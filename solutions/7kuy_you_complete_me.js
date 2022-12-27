/**
 *      < 7kuy >
 * 
 *      You Complete Me
 * 
 *      https://www.codewars.com/kata/63967eb85e54bd00237d2201
 */

const complete = str => {
    const strStart = str.split('')
    const strEnd = [strStart[0]]

    const isPalindrome = result => {
        for (let i = 0; i < result.length / 2; i++) {
            if (result[i] !== result[result.length - 1 - i])
                return false
        }
        return true
    }

    let current = 1

    while (!isPalindrome([...strStart, ...strEnd].join(''))) {
        strEnd.unshift(strStart[current])
        current++
    }

    return [...strStart, ...strEnd].join('')
}

module.exports = {
    complete
}