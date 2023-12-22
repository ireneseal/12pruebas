
const button = document.querySelector('button');

const jabalina = document.querySelector('.jabalina__target');
const endGame = document.querySelector('.end-game')

//Lanzar Jabalina a coordenadas random
let counter = 0;

function lanzarJabalina(){

    counter++;

    let positionX = Math.random()*100;
    let positionY = Math.random()*100;

    if(counter <=10){

    jabalina.innerHTML = `<div style= "height: 20px; width: 20px; background: red; border-radius: 50%; position: absolute; top: ${positionY}%; left: ${positionX}%;"></div>`;

    }

    else{
        endGame.classList.remove('end-game');
        endGame.classList.add('show');
        jabalina.innerHTML = "";
        
    }
    console.log(positionX);


}



button.addEventListener('click', lanzarJabalina);