// voir doc js pour plus de méthodes

// tableau simple
let monTableau = ['un', 'deux', 'trois'];
monTableau.push('quatre');//ajoute un element
monTableau.unshift('zero');//ajoute au debut
monTableau.pop(); // supprime le dernier élément
monTableau.shift(); // supprime le premier élément
// console.log(monTableau[0])
//console.log(monTableau[monTableau.length - 1]);
// console.log(monTableau.join(' / '));
console.log(monTableau.indexOf('deux')); // retourne 1



//tableau 2d
let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D[1].unshift('test');
// console.log(monTableau2D);
//console.log(monTableau2D[1][2]);
console.log(monTableau2D.join(' / '));//joindre ?




//tableau associatif   ------objet litteral
let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
monTableauAssociatif['nationalite'] = 'Américaine';
console.log(monTableauAssociatif);
console.log(monTableauAssociatif['poste']);