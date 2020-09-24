/*
10: guessNumber.js
Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura été passé en ligne de commande. Le programme s'éxecutera tant que l'utilisateur n'aura pas trouvé le bon nombre. Après chaque tentative de l'utilisateur pour trouver le nombre secret, celui entré en argument du programe à son lancement, les messages suivant lui appaitront:

si le nombre entré par l'utilisateur est plus petit que le nombre secret: 'Nombre trop petit' en rouge
si le nombre entré par l'utilisateur est plus grand que le nombre secret: 'Nombre trop grand' en rouge
si le nombre entré par l'utilisateur est égal au nombre secret: 'Bravo!' en vert
*/
import readlineSync from 'readline-sync'
import chalk from 'chalk'

while (true) {
    let choice = readlineSync.question(chalk.yellow('Saisissez un nombre: '))
    let nbr = '7'
    if (choice < nbr) {
        console.log(chalk.red('Nombre trop petit'))
    }
    if (choice > nbr) {
        console.log(chalk.red('Nombre trop grand'))
    }
    if (choice === nbr) {
        console.log(chalk.green('Bravo!'))
        break
    }
}
