
const  asterix = {
        weapons: {
             puño: "1",
             pierna:"2",
             bofetada:"3",
             sentadilla:"4",
             pocion: null
        }
     };

const cilindrix = {
        weapons: {
           llave: "1",
           luxacion:"2",
           bofetada:"3",
           sentadilla:"4"
        }
     };

const btnFight = document.querySelector('.btn-fight');

const cilindrixContainer = document.querySelector('.game__fighter-cilindrix');
const asterixContainer = document.querySelector('.game__fighter-asterix');

const puntuacionCilindrix = document.querySelector('.points-cilindrix');
const puntuacionAsterix = document.querySelector('.points-asterix');

function fight(){



//RANDOM WEAPON FOR ASTERIX

// Step 1: Get all keys from the weapons object
const weaponKeysAsterix = Object.keys(asterix.weapons);

// Step 2: Choose a random key
const randomKeyAsterix = weaponKeysAsterix[Math.floor(Math.random() * weaponKeysAsterix.length)];

// Step 3: Access the corresponding value
const randomWeaponAsterix = asterix.weapons[randomKeyAsterix];

//console.log(`Random weapon: ${randomKeyAsterix}, Value: ${randomWeaponAsterix}`);


puntuacionAsterix.innerHTML = `${randomKeyAsterix}`

//${randomWeaponAsterix}

////////////////////////////////////////////////////////////////

//RANDOM WEAPON FOR CILINDRIX

// Step 1: Get all keys from the weapons object
const weaponKeysCilindrix = Object.keys(cilindrix.weapons);

// Step 2: Choose a random key
const randomKeyCilindrix = weaponKeysCilindrix[Math.floor(Math.random() * weaponKeysCilindrix.length)];

// Step 3: Access the corresponding value
const randomWeaponCilindrix = cilindrix.weapons[randomKeyCilindrix];

puntuacionCilindrix.innerHTML = `${randomKeyCilindrix}`


//console.log(`Random weapon: ${randomKeyCilindrix}, Value: ${randomWeaponCilindrix}`);

compareFight(randomWeaponCilindrix, randomWeaponAsterix,randomKeyAsterix, randomKeyCilindrix);
};
let counterAsterix = 0;
let counterCilindrix = 0;

function compareFight (randomWeaponCilindrix, randomWeaponAsterix, randomKeyAsterix, randomKeyCilindrix){

    console.log(randomWeaponAsterix);

    if( randomWeaponCilindrix > randomWeaponAsterix ){

        puntuacionCilindrix.innerHTML = `${randomKeyCilindrix}: ${counterCilindrix++}`;
        puntuacionAsterix.innerHTML = `${randomKeyAsterix}: ${counterAsterix}`;
    }

    else if( randomWeaponCilindrix < randomWeaponAsterix ){

        puntuacionAsterix.innerHTML = `${randomKeyAsterix}: ${counterAsterix++}`;
        puntuacionCilindrix.innerHTML = `${randomKeyCilindrix}: ${counterCilindrix}`
    }

    else if( randomWeaponCilindrix = randomWeaponAsterix ){

        puntuacionAsterix.innerHTML = `${randomKeyAsterix}: ${counterAsterix}`;
        puntuacionCilindrix.innerHTML = `${randomKeyCilindrix}: ${counterCilindrix}`
    }

    showWinner(counterAsterix, counterCilindrix);
};

function showWinner(counterAsterix, counterCilindrix){

    if( counterAsterix == 6){
        asterixContainer.classList.add('winner');
        if (counterAsterix == 7){
            return
        }

    }

    else if( counterCilindrix == 6){
        cilindrixContainer.classList.add('winner');
        
    }

};

/*function reset(counterAsterix, counterCilindrix){

    counterAsterix == 7 ? counterAsterix == 0 : counterAsterix++;
    counterCilindrix == 7 ? counterCilindrix == 0 : counterCilindrix++;

}*/


btnFight.addEventListener('click', fight);