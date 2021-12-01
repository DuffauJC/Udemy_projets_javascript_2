let voitures = new WeakMap();

let index = {
    id: 1
}

let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
}

voitures.set(index, voitureA);

// voitures.delete(index);
console.log(voitures);

//Offre une flexibilité supplémentaire en comparaison de l'objet Map.
// Il n'accepte que des objets en clé. On utilise souvent cet objet pour stocker des données.
// Une fois que l'objet en clé n'existe plus (par exemple, si sa valeur passe à null),
// la valeur est automatiquement supprimée également.