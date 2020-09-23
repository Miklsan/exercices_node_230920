/*3: counter.js
Ecrivez une programme counter qui prend 3 arguments en ligne de commande:

un nombre min pour le début du counter
un nombre max pour la fin du counter
un nombre step pour le pas/interval du counter
L'execution de ce programme devra afficher sur le terminal tous les nombres de min jusqu'a max avec un interval de step:

% node counter.js 1 10 2
1
3
5
7
9
% node counter.js 100 1000 100
100
200
300
400
500
600
700
800
900
1000
*/
let nbmin = Number(process.argv[2])
let nbmax = Number(process.argv[3])
let nbstep = Number(process.argv[4])

const count = (min, max, step) => {
    for (let counter = min; counter <= max; counter += step) {
        console.log(counter)
    }
}
// Verifier que les argument 2 et 3 passés à notre programme peuvent être convertis en nombre
if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

if (isNaN(process.argv[3])) {
    console.log(`Error: ${process.argv[3]} is not a number.`)
    process.exit(1)
}

if (isNaN(process.argv[4])) {
    console.log(`Error: ${process.argv[4]} is not a number.`)
    process.exit(1)
}
// Verifier qu'il n'y a bien 3 arguments  passés à notre programme
if (process.argv.length !== 5) {
    console.log('usage: node counter.js min max step')
    process.exit(4)
}

count(nbmin, nbmax, nbstep)
