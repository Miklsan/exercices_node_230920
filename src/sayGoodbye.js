/*1: sayGoodbye.js
Ecrivez un script sayGoodbye.js qui prend en argument de la ligne de commande une string et affiche un message comme ci-dessous:

% node sayGoodbye.js React
Goodbye, React
*/

let name = process.argv[2]

// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 3) {
    console.log('usage: node stars.js number')
    process.exit(1)
}
// Verifier que l'argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is a number.`)
    process.exit(2)
  }


console.log(`Goodbye, ${name}`)
