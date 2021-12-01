let btn = document.querySelector('#mode');
let span = document.querySelector('span');
let body = document.querySelector('body');

// let theme = localStorage.getItem('theme');
// console.log(theme);
// if (theme && theme.value === 'sombre') {
//     modeSombre();
// }
if(localStorage.getItem('theme')){
    if(localStorage.getItem('theme') === 'sombre') {
        modeSombre();
    }
}

btn.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.className = '';
        span.textContent = 'Thème sombre';
        localStorage.setItem('theme', 'clair')
    } else {
        modeSombre();


    }
});


function modeSombre() {
    body.className = 'dark';
    span.textContent = 'Thème clair';
    localStorage.setItem('theme', 'sombre')
}
