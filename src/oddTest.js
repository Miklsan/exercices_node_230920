/*
7: oddTest.js
Ecrivez un script oddTest.js qui vérifit si l'argument passé en ligne de commande est impair:

% node oddTest.js 7
7 est un nombre impair
% node oddTest.js 10
10 est un nombre pair
*/
// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 3) {
    console.log('usage: node oddTest.js number')
    process.exit(2)
}
// Verifier que l'argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(3)
}

let myNbr = Number(process.argv[2])

const isItOdd = (nbr) => {
    if (nbr % 2) {
        return `${nbr} est un nombre impair`
    } else {
        return `${nbr} est un nombre pair`
    }
}

console.log(isItOdd(myNbr))
