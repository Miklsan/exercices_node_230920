/*
9: majorityTest.js:
Un état vous demande d'ecrire un petit programme qui vérifit que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter
*/

const vote = (firstname, name, age) => {
    return age < 18
        ? `Désolé ${firstname} ${name}, vous êtes mineur, vous ne pouvez pasvoter`
        : `${firstname} ${name}, vous êtes majeur, vous pouvez voter`
}

console.log(vote('Mika', ' Borghmans', 39))
