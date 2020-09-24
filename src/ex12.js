/*
11: quiz.js
Ecrivez un qcm de 5 questions. Le joueur devra repondre aux questions en entrant le nombre correspondant à la bonne réponse. A la fin du qcm vous lui donnerez sa note qui correspondera au nombre de bonnes reponses sur les 5 questions. Je vous propose les 5 questions et les choix possibles, mais vous pouvez créer les votre si vous voulez:

Question 1: Le C++ est un:
1: langage => réponse attendue
2: compilateur

Question 2: TypeScript est une évolution de Javascript:
1: Vrai => réponse attendue
2: Faux

Question 3: Lire les cours avant de faire les éxercices est inutile:
1: Vrai
2: Faux => réponse attendue

Question 4: react.js a été developpé par Google:
1: Vrai
2: Faux => réponse attendue

Question 5: Ethereum est une blockchain publique:
1: Vrai => réponse attendue
2: Faux
*/
import readlineSync from 'readline-sync'
import chalk from 'chalk'

console.log(`Choisissez une réponse`)

let score = 0

const question1 = () => {
    let answers = ['langage', 'compilateur']
    let question = readlineSync.keyInSelect(answers, `Q1. Le C++ est un :`)

    switch (question) {
        case 0:
            console.log(chalk.green(`Bonne réponse !`))
            score++
            break
        case 1:
            console.log(chalk.red(`Mauvaise réponse, Le C++ est un langage !`))
            break
        default:
            console.log(`Terminé`)
    }
}

const question2 = () => {
    let answers = ['Vrai', 'Faux']
    let question = readlineSync.keyInSelect(
        answers,
        `Q2. TypeScript est une évolution de Javascript :`
    )

    switch (question) {
        case 0:
            console.log(chalk.green(`Bonne réponse !`))
            score++
            break
        case 1:
            console.log(
                chalk.red(
                    `Mauvaise réponse TypeScript est une évolution de Javascript!`
                )
            )
            break
        default:
            console.log(`Terminé`)
    }
}

const question3 = () => {
    let answers = ['Vrai', 'Faux']
    let question = readlineSync.keyInSelect(
        answers,
        `Q3. Lire les cours avant de faire les éxercices est inutile :`
    )

    switch (question) {
        case 0:
            console.log(
                chalk.red(
                    `Mauvaise réponse, lire les cours avant de faire les éxercices est important !`
                )
            )
            break
        case 1:
            console.log(chalk.green(`Bonne réponse !`))
            score++
            break
        default:
            console.log(`Terminé`)
    }
}

const question4 = () => {
    let answers = ['Vrai', 'Faux']
    let question = readlineSync.keyInSelect(
        answers,
        `Q4. react.js a été developpé par Google :`
    )

    switch (question) {
        case 0:
            console.log(
                chalk.red(
                    `Mauvaise réponse, react.js a été developpé par Facebook!`
                )
            )
            break
        case 1:
            console.log(chalk.green(`Bonne réponse !`))
            score++
            break
        default:
            console.log(`Terminé`)
    }
}

const question5 = () => {
    let answers = ['Vrai', 'Faux']
    let question = readlineSync.keyInSelect(
        answers,
        `Q5. Ethereum est une blockchain publique :`
    )

    switch (question) {
        case 0:
            console.log(chalk.green(`Bonne réponse !`))
            score++
            break
        case 1:
            console.log(
                chalk.red(
                    `Mauvaise réponse, Ethereum est une blockchain publique!`
                )
            )
            break
        default:
            console.log(`Terminé`)
    }
}

question1()
question2()
question3()
question4()
question5()

console.log(chalk.yellow(`Votre score : ${score} bonne(s) réponse(s) sur 5`))
