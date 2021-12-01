let nombres = [10, 45, 75, 10, 24, 45];
// let monSet  = new Set(nombres);
let monSet = new Set();

monSet.add('70');
monSet.add(87);
// monSet.delete(87);

console.log(monSet.size);

//Permet de stocker des valeurs uniques de tout type.
// Il s'agit d'une sécurité comparé à un simple tableau.
// Je vous recommande d'utiliser cet objet lorsque vous voulez stocker
// des informations sensibles qui ne doivent pas être dupliquées.
// L'exécution d'un objet Set est également plus rapide qu'un objet Array (donc qu'un tableau),
// même si sur de petits tableaux, cela ne se remarque pas.