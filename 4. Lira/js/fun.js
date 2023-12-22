const doCord = document.querySelector('#do');
const reCord = document.querySelector('#re');
const miCord = document.querySelector('#mi');
const faCord = document.querySelector('#fa');

const doSound = new Audio('audio/5472.mp3');
const reSound = new Audio('audio/5487.mp3');
const miSound = new Audio('audio/online-guitar-tuner-b3-.mp3');
const faSound = new Audio('audio/online-guitar-tuner-g3-.mp3');



function playDo() {
    
    doSound.play();
  };


doCord.addEventListener('mouseover', playDo);

function playRe() {
    
    reSound.play();
  };


reCord.addEventListener('mouseover', playRe);

function playMi() {
    
    miSound.play();
  };


miCord.addEventListener('mouseover', playMi);

function playFa() {
    
    faSound.play();
  };


faCord.addEventListener('mouseover', playFa);