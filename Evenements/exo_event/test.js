
let btn = document.querySelector('button');
let timer;
let secondes=10;

function stop(){
    clearInterval(timer);
    let stop=document.createElement("p");
    stop.textContent="Stop !!";
    document.querySelector("body").append(stop);
}

function decompte() {

    secondes--;
    if (secondes===0){
        stop();
    }else {
        let seconde=document.createElement("p");
        seconde.textContent=secondes;
        document.querySelector("body").append(seconde);
    }
}

function start() {
     timer=setInterval(decompte,1000);
}

btn.addEventListener('click', start);


