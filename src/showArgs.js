/* 2: showArgs.js
Ecrivez un script showArgs.js qui prend en arguments de la ligne de commande plusieures string et les affiche dans l'ordre inverse de leur ordre d'entrée:

% node showArgs.js 1 2 3 Soleil
Soleil
3
2
1
*/

const reverse = process.argv.reverse()
const showArgs = () => {
    for (let i = 0; i < reverse.length - 2; i++) console.log(reverse[i])
}

showArgs()
