const url = 'https://blockchain.info/ticker';

function recupPrix() {
    //creation requete
    let requete = new XMLHttpRequest();//creation objet
    requete.open('GET', url);// get / post ...url
    requete.responseType = 'json';//attente json
    requete.send();//envoie requete

// a la reception fonction anonyme executée
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;// on stock la réponse (le json)
                let prixEnEuros=reponse.EUR.last;
                document.querySelector('#price_label').textContent=prixEnEuros;
            }
            else {
                alert('Un problème est survenu, merci de revenir plus tard.');
            }
        }
    }
    console.log('Prix actualisé')
}

setInterval(recupPrix,5000);
