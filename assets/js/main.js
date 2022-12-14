/* 
L'utente clicca su un bottone che genererĂ  una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
*/

// seleziono gli elementi della DOM con queryselector
const container = document.querySelector('.my_container');
const gameBtn = document.querySelector('.start_game');
const level = document.getElementById('difficulty').value;
const cellsList = document.getElementsByClassName('cell'); 


// dichiaro una variabile per il numero delle celle
let cellsNum = 100;

// dichiaro una variabile con il numero di bombe
const numberOfBombs = 16;
const bombInGame = generateBombs(1, 100)
console.log(bombInGame);

let score = 0;

// aggiungo un eventlistener per creare la griglia al click del bottone
gameBtn.addEventListener('click', function () {

    // invoco la funzione per la griglia
    gridGen(100, container);
    

})

// FUNCTIONS

// funzione per generare le griglia
function gridGen(num, domEl) {
    for (let i = 1; i <= num; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        domEl.appendChild(cell);
        cell.innerHTML += [i];
        // aggiungo un eventlistener per colorare le celle
        cell.addEventListener("click", function () {
            this.classList.toggle("active");
            console.log(`Hai cliccato sulla casella ${i}`);
            if (isBomb(i, bombInGame)) {
                cell.classList.add('red');
                console.log('Hai preso una bomba');
                this.innerText = 'BOOM';
                domEl.innerHTML = 'Hai perso! ' + score + ' Punti fatti! Ricarica la pagina per riprovare';
            } else {
                console.log('Safe');
                score++;
            }
            if (score == num - 16) {
                console.log('Hai vinto! ' + score + ' punti fatti');
                domEl.innerHTML = 'Hai vinto! ' + score + ' Punti fatti! Ricarica la pagina per riprovare';
            }
        })
    }
}

// funzione per generare numeri random
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione per generare le bombe
function generateBombs(min, max) {
    const bombs = []
    while (bombs.length !== numberOfBombs) {

        // genero numero casuale
        const bomb = generateRandomNumber(min, max)

        // verifico se il numero Ă© stato giĂ¡ inserito nella lista di bombe
        if (!bombs.includes(bomb)) {
            bombs.push(bomb)
        }
    }
    return bombs
}

function isBomb (num, list) {
    if (list.includes(num)) {
        return true;
    } 
    return false;
}