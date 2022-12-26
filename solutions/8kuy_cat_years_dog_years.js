/**
 *      < 8kuy >
 * 
 *      Cat years, Dog years
 * 
 *      https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
 */

const humanYearsCatYearsDogYears = humanYears => {
    let catYears = 0
    let dogYears = 0

    for (let i = 1; i <= humanYears; i++) {
        switch(i) {
            case 1:
                catYears += 15
                dogYears += 15
                break
            case 2:
                catYears += 9
                dogYears += 9
                break
            default:
                catYears += 4
                dogYears += 5
        }
    }

    return [humanYears, catYears, dogYears];
}

const humanYearsCatYearsDogYearsSecond = humanYears => {
    switch(humanYears) {
        case 1:
            return [1, 15, 15]
        case 2:
            return [2, 24, 24]
        default:
            return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
    }
  }

module.exports = {
    humanYearsCatYearsDogYears,
    humanYearsCatYearsDogYearsSecond
}