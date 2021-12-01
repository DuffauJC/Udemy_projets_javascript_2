// function bonjour(prenom) {

//   let resultat = "Bonjour " + prenom; // Variable locale
//   let maClosure = () => console.log(resultat);
//   return maClosure;

// }

// function bonjour_bis(prenom) {

//   let resultat = "Bonjour " + prenom; // Variable locale
//   console.log(resultat);

// }

// let maFonction = bonjour('Evan');
// maFonction();
// bonjour_bis('Nicolas');

function timer() {
    let secondes = 0;

    let maClosure = () => {
        return ++secondes;
    }
    return maClosure;
}

let monTimer = timer();
console.log(monTimer());//1
console.log(monTimer());//2
console.log(monTimer());//3

let monDeuxiemeTimer = timer();
console.log(monDeuxiemeTimer());//1

console.log(monTimer());//4

// sauvegarde variable locales d'une methode