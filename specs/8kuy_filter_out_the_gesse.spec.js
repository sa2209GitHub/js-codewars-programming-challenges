/**
 *      < 8kuy >
 * 
 *      Filter Out The Gesse
 * 
 *      https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
 */

const { gooseFilter } = require('../solutions/8kuy_filter_out_the_gesse')
const { assert } = require('chai')

describe('< 8kuy > Filter Out The Gesse', () => {
    it("Mixed list", function () {
        assert.deepEqual(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    });
    it("No geese", function () {
        assert.deepEqual(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]), ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    });
    it("All geese", function () {
        assert.deepEqual(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), []);
    })
})
