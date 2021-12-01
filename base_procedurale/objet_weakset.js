let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
}
let voitureB = {
    constructeur: 'Renault',
    modele: 'Espace'
}

let voitures = new WeakSet([voitureA, voitureB]);
console.log(voitures);

//Offre une flexibilité supplémentaire en comparaison de l'objet Set.
// Il n'accepte que des objets.
// Une fois que l'objet stocké dans le WeakSet passe à null, il est automatiquement retiré.