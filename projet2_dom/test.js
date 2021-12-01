// suppression div
let divSup=document.getElementById("a-supprimer");
divSup.remove();

//creation header
let header=document.createElement("header");
let titre=document.createElement("h1");
titre.textContent="Bienvenue";
header.className="header";

document.querySelector('.container').prepend(header);
document.querySelector('.header').prepend(titre);

//creation sous header
let sousHeader=document.createElement("div");
let titre2=document.createElement("p");
titre2.textContent="Acceuil / Une autre page";
sousHeader.className="sous_header";

document.querySelector('.container').append(sousHeader);
document.querySelector('.sous_header').prepend(titre2);

//creation paragraphe
let param =document.createElement("p");
param.textContent="Ceci un paragraphe crée dynamique en javascript !";
document.querySelector(".container").append(param);