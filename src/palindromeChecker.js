/*
6: palindromeChecker.js
Ecrivez un script palindromeChecker.js qui verifit si l'argument passé en ligne de commande est un palindrome:

% node palindromeChecker.js tenet
tenet is a palindrome
% node palindromeChecker.js 3133773313
3133773313 is a palindrome
% node palindromeChecker.js Alyra
Alyra is not a palindrome
*/
let myString = process.argv[2]

const isPalindrome = (string) => {
    const reverseString = string.split('').reverse().join('')
    return reverseString === string
        ? `${process.argv[2]} is a palindrome`
        : `${process.argv[2]} is not a palindrome`
}
// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 3) {
    console.log('usage: node stars.js number')
    process.exit(3)
}
console.log(isPalindrome(myString))
