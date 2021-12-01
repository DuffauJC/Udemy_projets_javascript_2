let choix = "";
let nb1 = 0;
let nb2 = 0;
let result = 0;
let nb;

afficherPrompt();

let nbChoisi = parseInt(choix);
console.log(nbChoisi);

// ou un if()
try {
    switch (nbChoisi) {
        case 1:
            premNombre();
            deuxNombre();
            addition(nb1, nb2);
            // afficherConfirm(result);
            break;
        case 2:
            premNombre();
            deuxNombre();
            soustraction(nb1, nb2);
            // afficherConfirm(result);
            break;
        case 3:
            premNombre();
            deuxNombre();
            mutliplication(nb1, nb2);
            // afficherConfirm(result);
            break;
        case 4:
            premNombre();
            deuxNombre();
            division(nb1, nb2);
            //afficherConfirm(result);
            break;
        default:
            throw new Error("Une erreur est survenue.");
    }
    afficherConfirm(result);



}catch(error) {
    alert(error); // Si une erreur est survenue, on affiche l'erreur
}

function afficherPrompt() {
    do {
        choix = prompt("Que souhaitez-vous faire ?\n" +
            "1 - Addition\n" +
            "2 - Soustraction\n" +
            "3 - Multiplication\n" +
            "4 - Division")
    }
    while (choix === "");
}

function premNombre() {
    do {
        nb = prompt("Premier nombre :");
        nb1 = parseInt(nb);
    } while (isNaN(nb1));
    console.log(typeof nb1);
    return nb1;
}

function deuxNombre() {
    do {
        nb = prompt("Deuxième nombre :");
        nb2 = parseInt(nb);
    } while (isNaN(nb2));
    console.log(typeof nb2);
    return nb2;
}

function afficherConfirm(result) {
    confirm("Le résultat est : " + result);
}

function addition(nb1, nb2) {
    result = nb1 + nb2;
    console.log(result);
    return result;
}


function soustraction(nb1, nb2) {
    result = nb1 - nb2;
    console.log(result);
    return result;
}

function mutliplication(nb1, nb2) {
    result = nb1 * nb2;
    console.log(result);
    return result;
}

function division(nb1, nb2) {
    if (nb2 === 0) {
        throw new Error("Division par 0 impossible !");
    }
    result = nb1 / nb2;
    console.log(result);
    return result;
}


