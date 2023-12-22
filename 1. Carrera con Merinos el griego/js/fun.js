const button = document.querySelector('button');
const runnerContainer = document.querySelector('.runner__container');
const gradient = document.querySelector('.runner__container-gradient')
const winnerParagraph = document.querySelector('p');
const image = document.querySelector('img');


//Función para contar clicks

let counter = 0;
const increment = 5
let progressBarValue = 0;

function todo(){
  
    contadorClicks();
    move();
}

//Función set timeout de 3 segundos que reinicia los clicks o muestra ganador

function contadorClicks(){

    counter ++;
    console.log(counter)
    progressBarValue += increment;

       setTimeout(() => {
        if ( counter >= 21){
            winnerParagraph.classList.remove('opacity');
            image.src = "img/end.png";
        } 

        else{return reset();}

       }, 3000);
        
};

function reset(){
    counter = 0;
    gradient.style.width = 0;
    progressBarValue = 0;
}

function move(){

    gradient.style.width = `${progressBarValue}%`;
}

// Defino el evento

//En 3 segundos +20 clicks

button.addEventListener('click', todo)