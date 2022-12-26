/**
 *      < 8kuy >
 * 
 *      altERnaTIng cAsE <=> ALTerNAtiNG CaSe
 * 
 *      https://www.codewars.com/kata/56efc695740d30f963000557
 */

String.prototype.toAlternatingCase = function () {
    return this.split('').
                map(char => char === char.toUpperCase() ?
                char.toLowerCase() : char.toUpperCase()).join('')
}
