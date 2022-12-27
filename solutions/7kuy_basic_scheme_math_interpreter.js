/**
 *      < 7kuy >
 * 
 *      Basic Scheme Math Interpreter
 * 
 *      https://www.codewars.com/kata/5c1ecee170fee65c8f00049b
 */

const scheme = cmd => {
    let [ op, ...args ] = cmd.replace(/[\(\)]/g, '').split(' ')

    args = args.map(Number)

    switch (op) {
        case '+': return args.reduce((a, b) => a + b, 0);
        case '-': return !args.length ? 0 : args.reduce((a, b) => a - b);
        case '*': return args.reduce((a, b) => a * b, 1);
        case '/': return args.reduce((a, b) => a / b);
    }
}

module.exports = {
    scheme
}