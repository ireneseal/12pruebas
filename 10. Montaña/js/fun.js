
const mountainContainer = document.querySelector('.mountain__container');

const rowOne = document.querySelector('.row__One');
const rowTwo = document.querySelector('.row__Two');
const rowThree = document.querySelector('.row__Three');
const rowFour = document.querySelector('.row__Four');
const rowFive = document.querySelector('.monk__Five');

const button = document.querySelector('button');
const snowContainer = document.querySelector('.snow')

let counter = 0;

function* myGenerator(){
    yield drawRowOne();
    yield drawRowTwo();
    yield drawRowThree();
    yield drawRowFour();
    yield drawMonk();
    yield letItSnow();
}

const myGeneratorCall = myGenerator();

function draw(){
    counter ++;

    if( counter == 1){
        myGeneratorCall.next();
    }

    if( counter == 2){
        myGeneratorCall.next();
    }

    if( counter == 3){
        myGeneratorCall.next();
    }

    if( counter == 4){
        myGeneratorCall.next();
    }

    if(counter == 5){
        myGeneratorCall.next();
    }

    if(counter == 6){
        myGeneratorCall.next();
    }
   
}

function drawRowOne(){

    let stone1 = document.createElement('img');
    stone1.src = 'img/stone-svgrepo-com (2).svg';
         rowOne.appendChild(stone1);

    let stone2 = document.createElement('img');
    stone2.src = 'img/stone-svgrepo-com (2).svg';
    rowOne.appendChild(stone2);

    let stone3 = document.createElement('img');
    stone3.src = 'img/stone-svgrepo-com (2).svg';
            rowOne.appendChild(stone3);

    let stone4 = document.createElement('img');
    stone4.src = 'img/stone-svgrepo-com (2).svg';
                rowOne.appendChild(stone4);

}

function drawRowTwo(){

    let stone1 = document.createElement('img');
    stone1.src = 'img/stone-svgrepo-com (2).svg';
         rowTwo.appendChild(stone1);

    let stone2 = document.createElement('img');
    stone2.src = 'img/stone-svgrepo-com (2).svg';
        rowTwo.appendChild(stone2);

    let stone3 = document.createElement('img');
    stone3.src = 'img/stone-svgrepo-com (2).svg';
            rowTwo.appendChild(stone3);

}

function drawRowThree(){

    let stone1 = document.createElement('img');
    stone1.src = 'img/stone-svgrepo-com (2).svg';
         rowThree.appendChild(stone1);

    let stone2 = document.createElement('img');
    stone2.src = 'img/stone-svgrepo-com (2).svg';
    rowThree.appendChild(stone2);

}

function drawRowFour(){

    let stone1 = document.createElement('img');
    stone1.src = 'img/stone-svgrepo-com (2).svg';
         rowFour.appendChild(stone1);

}

function drawMonk(){

    let monk = document.createElement('img');
    monk.src = 'img/venerable.jpg';
    monk.style.width = "60px";
    monk.style.height = "60px";
    rowFive.appendChild(monk);
}

function letItSnow(){

    let snow = document.createElement('img');
   snow.src = "https://media.giphy.com/media/tIHktzgRi8yjIplFVI/giphy.gif";
   snow.style.width = "400px";
    snow.style.height = "400px";
         snowContainer.appendChild(snow);

}

button.addEventListener('click', draw)