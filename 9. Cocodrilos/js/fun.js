//Capturo canvas
const myCanvas = document.getElementById('myCanvas');

const asterix = document.querySelector('.asterix');

const leftClick = document.querySelector('.left');
const rightClick = document.querySelector('.right');

const precipicio = document.querySelector('.composicion');

//Le creo un contexto (objeto que creas en JS para poder añadir multimedia, en este caso dibujar, pero puede ser también audio)
const context = myCanvas.getContext("2d");

context.lineWidth = "3";

context.beginPath();
context.moveTo(20, 20);
context.bezierCurveTo(20, 10, 30, 80, 500, 40);
context.stroke();


function goLeft(){
   
    asterix.style.left = `${asterix.offsetLeft - 10}px`;
}

function goRight(){
    
    asterix.style.left = `${asterix.offsetLeft + 10}px`;
}


leftClick.addEventListener('click', goLeft);
rightClick.addEventListener('click', goRight);

function fall (){
    asterix.style.top = '430px';
};

precipicio.addEventListener('click', fall);