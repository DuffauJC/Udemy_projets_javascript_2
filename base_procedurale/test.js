
let poids= prompt("Votre poids en kgs ex (70) ?");
let taille= prompt("Votre taille en mètres ex (1.75) ?");
let imc=0;

calculImc(poids,taille);
alert("Voici votre imc : "+ imc);

function calculImc(poids,taille){
    imc= poids/Math.pow(taille,2);
    console.log(imc);
    return imc;
}


// correction

function calculerIMC(poids, taille) {

    // Converti la taille en centimètres => mètres
    let tailleEnMetres = taille / 100;

    // Calcule la taille à la puissance 2
    let tailleCalculee = Math.pow(tailleEnMetres, 2);

    // Calcule l'IMC
    let resultat       = poids / tailleCalculee;

    // Retourne notre résultat
    return resultat;

    // Version simplifiée de cette fonction : return poids / Math.pow((taille / 100), 2);

}

let poids   = prompt("Quel est votre poids ? (en kg)");
let taille  = prompt("Quelle est votre taille ? (en cm)");

alert(calculerIMC(poids, taille));
