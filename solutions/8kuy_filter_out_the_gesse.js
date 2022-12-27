/**
 *      < 8kuy >
 * 
 *      Filter Out The Gesse
 * 
 *      https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
 */

const gooseFilter = birds =>
    birds.filter(bird => ! ["African",
                            "Roman Tufted",
                            "Toulouse",
                            "Pilgrim",
                            "Steinbacher"].includes(bird))

module.exports = {
    gooseFilter
}