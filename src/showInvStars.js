/*4: showInvStars.js
Ecrivez un script showInvStars.js qui prend en argument de la ligne de commande un nombre et affiche sur le terminal une pyramide comme ci-dessous:

% node showInvStars.js 3
***
**
*
% node showInvStars.js 10
**********
*********
********
*******
******
*****
****
***
**
*
*/
let size = Number(process.argv[2])

const showInvStars = (nbr) => {
    for (let i = nbr; i >= 1; i -= 1) console.log('*'.repeat(i))
}

showInvStars(size)
