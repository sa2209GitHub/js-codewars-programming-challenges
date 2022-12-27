/**
 *      < 7kuy >
 * 
 *      How Fast Can The Burglar Steal all The Diamonds?
 * 
 *      https://www.codewars.com/kata/63a15a3511e6e70023e7d0d3
 */

// This works to!
// const diamondBurglar = locker => locker.join('.').match(/[*]{1,2}/g||[]).length

const diamondBurglar = locker => {
    const steal = (items, fake = 0) => {
        for (item of items)
            for (let i = 0; i < locker.length; i++)
                while (locker[i].includes(item))
                    locker[i] = locker[i].replace(item, fake)
        return locker
    }

    return steal(['**', '*']).join('').replace(/\./g, '').length
}

module.exports = {
    diamondBurglar
}