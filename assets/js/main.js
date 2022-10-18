/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
*/

// seleziono gli elementi della DOM con queryselector
const container = document.querySelector('.my_container');
const gameBtn = document.querySelector('.start_game');


// dichiaro una variabile per il numero delle celle
let cellsNum = 100;

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
        })
    }
}