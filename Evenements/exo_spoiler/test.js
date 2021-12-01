let btn = document.querySelector("button");
let texte = document.querySelector("p");
let hidden = true;

function afficher() {
    if (hidden) {
        texte.style.display = "none";
        btn.textContent = "Afficher";
        hidden=false;
    } else {
        texte.style.display = "block";
        btn.textContent = "Cacher";
        hidden=true;
    }
}

btn.addEventListener('click', afficher);





