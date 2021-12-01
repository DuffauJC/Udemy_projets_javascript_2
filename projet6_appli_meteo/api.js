let ville = 'Toulouse';
let btn = document.querySelector('#changer');
let villeChoisie;

recevoirTemperature(ville);

btn.addEventListener('click',afficherPrompt);

function afficherPrompt() {
    villeChoisie = prompt('Saisir une ville !');
    console.log(villeChoisie);
    ville=villeChoisie;
   return  recevoirTemperature(ville);
}
function recevoirTemperature(ville) {
    //creation requete
    const url='https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=d3c8196fb34661b59e17c332adeac28d&units=metric';
    let requete = new XMLHttpRequest();//creation objet
    requete.open('GET', url);// get / post ...url
    requete.responseType = 'json';//attente json
    requete.send();//envoie requete

// a la reception fonction anonyme executée
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;// on stock la réponse (le json)
                let temperature = reponse.main.temp;

                console.log(ville);
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            } else {
                alert('Un problème est survenu, merci de revenir plus tard.');
            }
        }
    }
}




