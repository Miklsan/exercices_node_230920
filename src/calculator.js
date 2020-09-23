/*5: calculator.js:
Ecrivez un script calculator.js qui effectue en ligne de commane des opérations arithmétiques simples:

% node calculator.js + 10 21
31
% node calculator.js - 10 1
9
% node calculator.js * 5 4
20
% node calculator.js / 10 2
5
*/
function add(nb1, nb2) {
    return nb1 + nb2
}
function sub(nb1, nb2) {
    return nb1 - nb2
}
function mul(nb1, nb2) {
    return nb1 * nb2
}
function div(nb1, nb2) {
    return nb1 / nb2
}

const calc = (op, nb1, nb2) => {
    switch (op) {
        case '+':
            console.log(add(nb1, nb2))
            break
        case '-':
            console.log(sub(nb1, nb2))
            break
        case '*':
            console.log(mul(nb1, nb2))
            break
        case '/':
            console.log(div(nb1, nb2))
            break
        default:
            console.log('Error : Unknown operator')
    }
}
let opCalc = process.argv[2]
let nb1Calc = Number(process.argv[3])
let nb2Calc = Number(process.argv[4])

// Verifier que les argument 2 et 3 passés à notre programme peuvent être convertis en nombre
if (isNaN(process.argv[3])) {
    console.log(`Error: ${process.argv[3]} is not a number.`)
    process.exit(1)
}

if (isNaN(process.argv[4])) {
    console.log(`Error: ${process.argv[4]} is not a number.`)
    process.exit(1)
}
if (process.argv.length !== 5) {
    console.log('usage: node counter.js opérateur number number')
    process.exit(4)
}

calc(opCalc, nb1Calc, nb2Calc)
