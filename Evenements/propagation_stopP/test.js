let article = document.querySelector('article');
let h1      = document.querySelector('h1');

article.addEventListener('click', () => {
    alert('article cliqué');
});

h1.addEventListener('click', (e) => {
    alert('titre cliqué');
    e.stopPropagation(); // On stop la propagation comme le titre est dans article
    // sinon au clic sur titre il est propagé au composant parent...l'article
});

